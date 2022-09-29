module TsBridge.Class
  ( class GenRecord
  , defaultArray
  , defaultBoolean
  , defaultFunction
  , defaultNumber
  , defaultProxy
  , defaultRecord
  , defaultString
  , genRecord
  , tsOpaqueType
  , tsOpaqueType1
  , tsOpaqueType2
  , tsOpaqueType3
  , tsOpaqueType4
  , tsOpaqueType5
  , tsOpaqueType6
  , tsTypeVar
  ) where

import Prelude

import Control.Monad.Writer (censor, listen, tell)
import Data.Array as A
import Data.Either (Either)
import Data.Maybe (Maybe)
import Data.Newtype (over, over2, unwrap, wrap)
import Data.Set.Ordered as OSet
import Data.String (Pattern(..), Replacement(..))
import Data.String as Str
import Data.Symbol (class IsSymbol, reflectSymbol)
import Data.Tuple.Nested ((/\), type (/\))
import Data.Typelevel.Undefined (undefined)
import Heterogeneous.Mapping (class Mapping, mapping)
import Prim.RowList (class RowToList, Cons, Nil, RowList)
import Safe.Coerce (coerce)
import TsBridge.ABC (A, B, C)
import TsBridge.DTS (TsFilePath(..), TsFnArg(..), TsModuleAlias(..), TsName(..), TsRecordField(..), TsType(..), TsTypeArgsQuant(..), mapQuantifier)
import TsBridge.DTS as TsBridge.DTS
import TsBridge.Monad (Scope, TsBridgeAccum(..), TsBridgeM, TsBridge_Monad_Wrap(..), defaultTsBridgeAccum, opaqueType)
import Type.Proxy (Proxy(..))

-------------------------------------------------------------------------------
-- Class / ToTsBridge
-------------------------------------------------------------------------------

class ToTsBridge a where
  toTsBridge :: a -> TsBridgeM TsType

data MappingToTsBridge = MappingToTsBridge

instance ToTsBridge a => Mapping MappingToTsBridge a (TsBridgeM TsType) where
  mapping _ = toTsBridge

-------------------------------------------------------------------------------
-- Class / ToTsBridge / Proxy
-------------------------------------------------------------------------------

instance ToTsBridge a => ToTsBridge (Proxy a) where
  toTsBridge _ = toTsBridge (undefined :: a)

-------------------------------------------------------------------------------
-- Class / ToTsBridge / Primitives
-------------------------------------------------------------------------------

instance ToTsBridge Number where
  toTsBridge = defaultNumber

instance ToTsBridge String where
  toTsBridge = defaultString

instance ToTsBridge Boolean where
  toTsBridge = defaultBoolean

instance ToTsBridge a => ToTsBridge (Array a) where
  toTsBridge = defaultArray MappingToTsBridge

instance (ToTsBridge a, ToTsBridge b) => ToTsBridge (a -> b) where
  toTsBridge = defaultFunction MappingToTsBridge

instance ToTsBridge a => ToTsBridge (Maybe a) where
  toTsBridge = tsOpaqueType1 MappingToTsBridge "Data.Maybe" "Maybe" "A"

instance (ToTsBridge a, ToTsBridge b) => ToTsBridge (Either a b) where
  toTsBridge = tsOpaqueType2 MappingToTsBridge "Data.Either" "Either" "A" "B"

instance ToTsBridge A where
  toTsBridge _ = tsTypeVar "A"

instance ToTsBridge B where
  toTsBridge _ = tsTypeVar "B"

instance ToTsBridge C where
  toTsBridge _ = tsTypeVar "C"

-------------------------------------------------------------------------------
-- Default Implementations
-------------------------------------------------------------------------------

tsTypeVar :: String -> TsBridgeM TsType
tsTypeVar x = do
  let
    tsName = TsName x

    scope =
      { floating: wrap $ OSet.singleton tsName
      , fixed: mempty
      }

  tell
    $ over TsBridgeAccum _ { scope = scope } defaultTsBridgeAccum
  pure $ TsTypeVar tsName

defaultProxy :: forall f a. Mapping f a (TsBridgeM TsType) => f -> Proxy a -> TsBridgeM TsType
defaultProxy mp _ = mapping mp (undefined :: a)

defaultNumber :: Number -> TsBridgeM TsType
defaultNumber _ = pure TsTypeNumber

defaultString :: String -> TsBridgeM TsType
defaultString _ = pure TsTypeString

defaultBoolean :: Boolean -> TsBridgeM TsType
defaultBoolean _ = pure TsTypeBoolean

defaultArray
  :: forall a f
   . Mapping f (Proxy a) (TsBridgeM TsType)
  => f
  -> Array a
  -> TsBridgeM TsType
defaultArray f _ = TsTypeArray <$> mapping f (Proxy :: _ a)

defaultFunction
  :: forall f a b
   . Mapping f (Proxy a) (TsBridgeM TsType)
  => Mapping f (Proxy b) (TsBridgeM TsType)
  => f
  -> (a -> b)
  -> TsBridgeM TsType
defaultFunction f _ = censor mapAccum ado
  arg /\ TsBridgeAccum { scope: scopeArg } <- listen $ mapping f (Proxy :: _ a)
  ret /\ TsBridgeAccum { scope: scopeRet } <- listen $ mapping f (Proxy :: _ b)
  let
    newFixed = (over2 wrap OSet.intersect scopeArg.fixed scopeRet.fixed)
      <> scopeArg.floating
      <> scopeRet.floating

    removeQuant =
      mapQuantifier $ OSet.filter (_ `OSet.notElem` (unwrap newFixed))

  in
    TsTypeFunction (TsTypeArgsQuant $ coerce newFixed)
      [ TsFnArg (TsName "_") (removeQuant arg)
      ]
      (removeQuant ret)
  where
  mapAccum = over TsBridgeAccum (\x -> x { scope = fixScope x.scope })

defaultRecord
  :: forall mp r rl
   . GenRecord mp rl
  => RowToList r rl
  => mp
  -> { | r }
  -> TsBridgeM TsType
defaultRecord mp _ = TsTypeRecord <$> genRecord mp (Proxy :: _ rl)

fixScope :: Scope -> Scope
fixScope { fixed, floating } =
  { floating: mempty
  , fixed: fixed <> floating
  }

-------------------------------------------------------------------------------
-- Class / GenRecord
-------------------------------------------------------------------------------

class GenRecord :: Type -> RowList Type -> Constraint
class GenRecord mp rl where
  genRecord :: mp -> Proxy rl -> TsBridgeM (Array TsRecordField)

instance GenRecord mp Nil where
  genRecord _ _ = pure []

instance
  ( Mapping mp (Proxy t) (TsBridgeM TsType)
  , GenRecord mp rl
  , IsSymbol s
  ) =>
  GenRecord mp (Cons s t rl) where
  genRecord mp _ = do
    let
      mkX = mapping mp (Proxy :: _ t)
      mkXs = genRecord mp (Proxy :: _ rl)
      str = reflectSymbol (Proxy :: _ s)
    x <- mkX
    xs <- mkXs
    let k = TsName $ str
    pure $
      A.cons (TsRecordField k { optional: false, readonly: true } x) xs

-------------------------------------------------------------------------------
-- Util
-------------------------------------------------------------------------------

tsOpaqueTypeImpl :: String -> String -> Array String -> Array (TsBridgeM TsType) -> TsBridgeM TsType
tsOpaqueTypeImpl pursModuleName pursTypeName targs = opaqueType
  (TsFilePath (pursModuleName <> "/index") "d.ts")
  (TsModuleAlias $ dotsToLodashes pursModuleName)
  (TsName pursTypeName)
  (OSet.fromFoldable $ TsName <$> targs)

tsOpaqueType
  :: forall a
   . String
  -> String
  -> a
  -> TsBridgeM TsType
tsOpaqueType pursModuleName pursTypeName _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [] []

tsOpaqueType1
  :: forall a mp f
   . Mapping mp (Proxy a) (TsBridgeM TsType)
  => mp
  -> String
  -> String
  -> String
  -> f a
  -> TsBridgeM TsType
tsOpaqueType1 mp pursModuleName pursTypeName a _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [ a ] [ mapping mp (Proxy :: _ a) ]

tsOpaqueType2
  :: forall a1 a2 mp f
   . Mapping mp (Proxy a1) (TsBridgeM TsType)
  => Mapping mp (Proxy a2) (TsBridgeM TsType)
  => mp
  -> String
  -> String
  -> String
  -> String
  -> f a1 a2
  -> TsBridgeM TsType
tsOpaqueType2 mp pursModuleName pursTypeName a1 a2 _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [ a1, a2 ]
    [ mapping mp (Proxy :: _ a1)
    , mapping mp (Proxy :: _ a2)
    ]

tsOpaqueType3
  :: forall a1 a2 a3 mp f
   . Mapping mp (Proxy a1) (TsBridgeM TsType)
  => Mapping mp (Proxy a2) (TsBridgeM TsType)
  => Mapping mp (Proxy a3) (TsBridgeM TsType)
  => mp
  -> String
  -> String
  -> String
  -> String
  -> String
  -> f a1 a2 a3
  -> TsBridgeM TsType
tsOpaqueType3 mp pursModuleName pursTypeName a1 a2 a3 _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [ a1, a2, a3 ]
    [ mapping mp (Proxy :: _ a1)
    , mapping mp (Proxy :: _ a2)
    , mapping mp (Proxy :: _ a3)
    ]

tsOpaqueType4
  :: forall a1 a2 a3 a4 mp f
   . Mapping mp (Proxy a1) (TsBridgeM TsType)
  => Mapping mp (Proxy a2) (TsBridgeM TsType)
  => Mapping mp (Proxy a3) (TsBridgeM TsType)
  => Mapping mp (Proxy a4) (TsBridgeM TsType)
  => mp
  -> String
  -> String
  -> String
  -> String
  -> String
  -> String
  -> f a1 a2 a3 a4
  -> TsBridgeM TsType
tsOpaqueType4 mp pursModuleName pursTypeName a1 a2 a3 a4 _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [ a1, a2, a3, a4 ]
    [ mapping mp (Proxy :: _ a1)
    , mapping mp (Proxy :: _ a2)
    , mapping mp (Proxy :: _ a3)
    , mapping mp (Proxy :: _ a4)
    ]

tsOpaqueType5
  :: forall a1 a2 a3 a4 a5 mp f
   . Mapping mp (Proxy a1) (TsBridgeM TsType)
  => Mapping mp (Proxy a2) (TsBridgeM TsType)
  => Mapping mp (Proxy a3) (TsBridgeM TsType)
  => Mapping mp (Proxy a4) (TsBridgeM TsType)
  => Mapping mp (Proxy a5) (TsBridgeM TsType)
  => mp
  -> String
  -> String
  -> String
  -> String
  -> String
  -> String
  -> String
  -> f a1 a2 a3 a4 a5
  -> TsBridgeM TsType
tsOpaqueType5 mp pursModuleName pursTypeName a1 a2 a3 a4 a5 _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [ a1, a2, a3, a4, a5 ]
    [ mapping mp (Proxy :: _ a1)
    , mapping mp (Proxy :: _ a2)
    , mapping mp (Proxy :: _ a3)
    , mapping mp (Proxy :: _ a4)
    , mapping mp (Proxy :: _ a5)
    ]

tsOpaqueType6
  :: forall a1 a2 a3 a4 a5 a6 mp f
   . Mapping mp (Proxy a1) (TsBridgeM TsType)
  => Mapping mp (Proxy a2) (TsBridgeM TsType)
  => Mapping mp (Proxy a3) (TsBridgeM TsType)
  => Mapping mp (Proxy a4) (TsBridgeM TsType)
  => Mapping mp (Proxy a5) (TsBridgeM TsType)
  => Mapping mp (Proxy a6) (TsBridgeM TsType)
  => mp
  -> String
  -> String
  -> String
  -> String
  -> String
  -> String
  -> String
  -> String
  -> f a1 a2 a3 a4 a5
  -> TsBridgeM TsType
tsOpaqueType6 mp pursModuleName pursTypeName a1 a2 a3 a4 a5 a6 _ =
  tsOpaqueTypeImpl pursModuleName pursTypeName [ a1, a2, a3, a4, a5, a6 ]
    [ mapping mp (Proxy :: _ a1)
    , mapping mp (Proxy :: _ a2)
    , mapping mp (Proxy :: _ a3)
    , mapping mp (Proxy :: _ a4)
    , mapping mp (Proxy :: _ a5)
    , mapping mp (Proxy :: _ a6)
    ]

dotsToLodashes :: String -> String
dotsToLodashes = Str.replaceAll (Pattern ".") (Replacement "_")