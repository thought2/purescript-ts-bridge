// Generated by purs version 0.15.4
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_CodePoints from "../Data.String.CodePoints/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Dodo from "../Dodo/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Class_Console from "../Effect.Class.Console/index.js";
import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Heterogeneous_Mapping from "../Heterogeneous.Mapping/index.js";
import * as Node_Process from "../Node.Process/index.js";
import * as Options_Applicative_Builder from "../Options.Applicative.Builder/index.js";
import * as Options_Applicative_Builder_Internal from "../Options.Applicative.Builder.Internal/index.js";
import * as Options_Applicative_Extra from "../Options.Applicative.Extra/index.js";
import * as Options_Applicative_Help_Chunk from "../Options.Applicative.Help.Chunk/index.js";
import * as Options_Applicative_Internal_Utils from "../Options.Applicative.Internal.Utils/index.js";
import * as Options_Applicative_Types from "../Options.Applicative.Types/index.js";
import * as PureScript_CST from "../PureScript.CST/index.js";
import * as Record from "../Record/index.js";
import * as Record_Extra from "../Record.Extra/index.js";
import * as Safe_Coerce from "../Safe.Coerce/index.js";
import * as Text_PrettyPrint_Leijen from "../Text.PrettyPrint.Leijen/index.js";
import * as Tidy from "../Tidy/index.js";
import * as TsBridgeGen_Types from "../TsBridgeGen.Types/index.js";
import * as TsBridgeGen_UIText from "../TsBridgeGen.UIText/index.js";
import * as Type_Equality from "../Type.Equality/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
import * as TypedEnv from "../TypedEnv/index.js";
var append = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var error = /* #__PURE__ */ Effect_Class_Console.error(Effect_Class.monadEffectEffect);
var defaultFormatOptions = /* #__PURE__ */ Tidy.defaultFormatOptions(Tidy.formatErrorVoid);
var bind = /* #__PURE__ */ Control_Bind.bind(Effect.bindEffect);
var mapFlipped = /* #__PURE__ */ Data_Functor.mapFlipped(Effect.functorEffect);
var show = /* #__PURE__ */ Data_Show.show(Effect_Exception.showError);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var $$try = /* #__PURE__ */ Control_Monad_Error_Class["try"](Control_Monad_Error_Class.monadErrorEffect);
var mapFlipped1 = /* #__PURE__ */ Data_Functor.mapFlipped(/* #__PURE__ */ Control_Monad_Except_Trans.functorExceptT(Effect.functorEffect));
var bind1 = /* #__PURE__ */ Control_Bind.bind(/* #__PURE__ */ Control_Monad_Except_Trans.bindExceptT(Effect.monadEffect));
var liftEffect = /* #__PURE__ */ Effect_Class.liftEffect(/* #__PURE__ */ Control_Monad_Except_Trans.monadEffectExceptT(Effect_Class.monadEffectEffect));
var debugIsSymbol = {
    reflectSymbol: function () {
        return "debug";
    }
};
var union = /* #__PURE__ */ Record.union();
var allDepsFileIsSymbol = {
    reflectSymbol: function () {
        return "allDepsFile";
    }
};
var classFileIsSymbol = {
    reflectSymbol: function () {
        return "classFile";
    }
};
var modulesFileIsSymbol = {
    reflectSymbol: function () {
        return "modulesFile";
    }
};
var packagesFileIsSymbol = {
    reflectSymbol: function () {
        return "packagesFile";
    }
};
var spagoFileIsSymbol = {
    reflectSymbol: function () {
        return "spagoFile";
    }
};
var optional = /* #__PURE__ */ Options_Applicative_Types.optional(Options_Applicative_Types.readMAlt)(Options_Applicative_Types.readMApplicative);
var fold = /* #__PURE__ */ Data_Foldable.fold(Data_Foldable.foldableArray);
var fold1 = /* #__PURE__ */ fold(Options_Applicative_Builder_Internal.modMonoid);
var $$long = /* #__PURE__ */ Options_Applicative_Builder["long"](Options_Applicative_Builder_Internal.optionFieldsHasName);
var mempty = /* #__PURE__ */ Data_Monoid.mempty(Options_Applicative_Builder_Internal.modMonoid);
var $$short = /* #__PURE__ */ Options_Applicative_Builder["short"](Options_Applicative_Builder_Internal.optionFieldsHasName);
var extractChunk = /* #__PURE__ */ Options_Applicative_Help_Chunk.extractChunk(Text_PrettyPrint_Leijen.docMonoid);
var mapFlipped2 = /* #__PURE__ */ Data_Functor.mapFlipped(Data_Functor.functorArray);
var value = /* #__PURE__ */ Options_Applicative_Builder.value(Options_Applicative_Builder_Internal.optionFieldsHasValue);
var metavar1 = /* #__PURE__ */ Options_Applicative_Builder.metavar(Options_Applicative_Builder_Internal.optionFieldsHasMetavar);
var pure1 = /* #__PURE__ */ Control_Applicative.pure(/* #__PURE__ */ Control_Monad_Except_Trans.applicativeExceptT(Effect.monadEffect));
var Wrap = function (x) {
    return x;
};
var MappingFromMaybeRecord = function (x) {
    return x;
};
var AppEnvVars = function (x) {
    return x;
};
var AppConfig = function (x) {
    return x;
};
var AppCliArgs = function (x) {
    return x;
};
var readMString = {
    readM: Options_Applicative_Builder.str,
    writeM: function (x) {
        return x;
    },
    metavar: function (v) {
        return "STRING";
    }
};
var mappingWithIndexMappingFr = function (dictIsSymbol) {
    var get = Record.get(dictIsSymbol)();
    return function () {
        return {
            mappingWithIndex: function (v) {
                return function (prop) {
                    return Data_Maybe.fromMaybe(get(prop)(v));
                };
            }
        };
    };
};
var writeM = function (dict) {
    return dict.writeM;
};
var wrapString = function (str) {
    return function (width) {
        var mkLine = Data_String_Common.joinWith(" ");
        var go = function ($copy_v) {
            return function ($copy_v1) {
                return function ($copy_lines) {
                    var $tco_var_v = $copy_v;
                    var $tco_var_v1 = $copy_v1;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1, lines) {
                        var v2 = function (v3) {
                            return append(lines)([ mkLine(v1) ]);
                        };
                        var $186 = Data_Array.uncons(v);
                        if ($186 instanceof Data_Maybe.Just) {
                            var newLineCandidate = append(v1)([ $186.value0.head ]);
                            var $187 = Data_String_CodePoints.length(mkLine(newLineCandidate)) <= width;
                            if ($187) {
                                $tco_var_v = $186.value0.tail;
                                $tco_var_v1 = newLineCandidate;
                                $copy_lines = lines;
                                return;
                            };
                            $tco_var_v = $186.value0.tail;
                            $tco_var_v1 = [ $186.value0.head ];
                            $copy_lines = append(lines)([ mkLine(v1) ]);
                            return;
                        };
                        $tco_done = true;
                        return v2(true);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_lines);
                    };
                    return $tco_result;
                };
            };
        };
        return go(Data_String_Common.split(" ")(str))([  ])([  ]);
    };
};
var readM = function (dict) {
    return dict.readM;
};
var quitWithError = function (msg) {
    return function __do() {
        error(msg)();
        return Node_Process.exit(1)();
    };
};
var printExpr = function (expr) {
    return Dodo.print(Dodo.plainText)(Dodo.twoSpaces)((function (v) {
        return v.doc;
    })(Tidy.formatExpr(defaultFormatOptions)(expr)));
};
var showPretty = function (dictShow) {
    var $208 = Data_Show.show(dictShow);
    return function ($209) {
        return (function (v) {
            if (v instanceof PureScript_CST.ParseSucceeded) {
                return printExpr(v.value0);
            };
            return "<invalid>";
        })(PureScript_CST.parseExpr($208($209)));
    };
};
var printError = /* #__PURE__ */ showPretty(TsBridgeGen_Types.showAppError);
var metavar = function (dict) {
    return dict.metavar;
};
var handleErrors = function (v) {
    if (v instanceof Data_Either.Left) {
        return function __do() {
            var debug = mapFlipped(Node_Process.lookupEnv("DEBUG"))(function (v1) {
                if (v1 instanceof Data_Maybe.Just && v1.value0 === "true") {
                    return true;
                };
                return false;
            })();
            return quitWithError((function () {
                if (debug) {
                    return show(v.value0);
                };
                return TsBridgeGen_UIText.init.unexpectedError;
            })())();
        };
    };
    if (v instanceof Data_Either.Right && v.value0 instanceof Data_Either.Left) {
        return quitWithError(printError(v.value0.value0));
    };
    if (v instanceof Data_Either.Right && v.value0 instanceof Data_Either.Right) {
        return pure(v.value0.value0);
    };
    throw new Error("Failed pattern match at TsBridgeGen.Config (line 264, column 16 - line 277, column 28): " + [ v.constructor.name ]);
};
var runInitM = function (ma) {
    return bind($$try(Control_Monad_Except_Trans.runExceptT(ma)))(handleErrors);
};
var getEnvVars = /* #__PURE__ */ (function () {
    return mapFlipped1(bind1(mapFlipped1(liftEffect(mapFlipped(Node_Process.getEnv)(TypedEnv.fromEnv(TypedEnv.readEnvImpl()()(TypedEnv.readEnvFieldsCons({
        reflectSymbol: function () {
            return "assetsDir";
        }
    })({
        reflectSymbol: function () {
            return "ASSETS_DIR";
        }
    })()(TypedEnv.readEnvFieldsCons(debugIsSymbol)({
        reflectSymbol: function () {
            return "DEBUG";
        }
    })()(TypedEnv.readEnvFieldsNil(Type_Equality.refl))()()(TypedEnv.readValueOptional(TypedEnv.parseValueBoolean)))()()(TypedEnv.readValueRequired(TypedEnv.parseValueString)))()())(Type_Proxy["Proxy"].value))))(Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither)(TsBridgeGen_Types.ErrParseEnvVars.create)))(Control_Monad_Error_Class.liftEither(Control_Monad_Except_Trans.monadThrowExceptT(Effect.monadEffect))))((function () {
        var $210 = Safe_Coerce.coerce();
        return function ($211) {
            return AppEnvVars($210($211));
        };
    })());
})();
var fromMaybeRecord = function (dictHMapWithIndex) {
    var $212 = Heterogeneous_Mapping.hmapWithIndex(dictHMapWithIndex);
    return function ($213) {
        return $212(MappingFromMaybeRecord($213));
    };
};
var fromMaybeRecord1 = /* #__PURE__ */ fromMaybeRecord(/* #__PURE__ */ Heterogeneous_Mapping.hmapWithIndexRecord()(/* #__PURE__ */ Heterogeneous_Mapping.mapRecordWithIndexCons(allDepsFileIsSymbol)(/* #__PURE__ */ mappingWithIndexMappingFr(allDepsFileIsSymbol)())(/* #__PURE__ */ Heterogeneous_Mapping.mapRecordWithIndexCons(classFileIsSymbol)(/* #__PURE__ */ mappingWithIndexMappingFr(classFileIsSymbol)())(/* #__PURE__ */ Heterogeneous_Mapping.mapRecordWithIndexCons(debugIsSymbol)(/* #__PURE__ */ mappingWithIndexMappingFr(debugIsSymbol)())(/* #__PURE__ */ Heterogeneous_Mapping.mapRecordWithIndexCons(modulesFileIsSymbol)(/* #__PURE__ */ mappingWithIndexMappingFr(modulesFileIsSymbol)())(/* #__PURE__ */ Heterogeneous_Mapping.mapRecordWithIndexCons(packagesFileIsSymbol)(/* #__PURE__ */ mappingWithIndexMappingFr(packagesFileIsSymbol)())(/* #__PURE__ */ Heterogeneous_Mapping.mapRecordWithIndexCons(spagoFileIsSymbol)(/* #__PURE__ */ mappingWithIndexMappingFr(spagoFileIsSymbol)())(Heterogeneous_Mapping.mapRecordWithIndexNil)()())()())()())()())()())()()));
var defaults = {
    modulesFile: "ts-bridge/src/MyTsBridgeModules.purs",
    classFile: "ts-bridge/src/MyTsBridgeClass.purs",
    spagoFile: "ts-bridge/spago.dhall",
    packagesFile: "ts-bridge/packages.dhall",
    allDepsFile: "ts-bridge/all-deps.dhall",
    debug: false
};
var mergeCfg = function (v) {
    return function (v1) {
        var optional1 = {
            modulesFile: v.modulesFile,
            classFile: v.classFile,
            spagoFile: v.spagoFile,
            packagesFile: v.packagesFile,
            allDepsFile: v.allDepsFile,
            debug: v1.debug
        };
        var mandatory = {
            assetsDir: v1.assetsDir
        };
        return union(mandatory)(fromMaybeRecord1(defaults)(optional1));
    };
};
var cliOption = function (dictReadM) {
    var readM1 = readM(dictReadM);
    var writeM1 = writeM(dictReadM);
    var metavar2 = metavar(dictReadM);
    return function (long1) {
        return function (short1) {
            return function (help) {
                return function (def) {
                    return Options_Applicative_Builder.option(optional(readM1))(fold1([ $$long(long1), Data_Maybe.maybe(mempty)($$short)(short1), Options_Applicative_Builder.helpDoc(new Data_Maybe.Just(extractChunk(Options_Applicative_Help_Chunk.vcatChunks(append(mapFlipped2(wrapString(help)(60))(Options_Applicative_Help_Chunk.stringChunk))([ Options_Applicative_Help_Chunk.stringChunk("Defaults to " + writeM1(def)), Options_Applicative_Help_Chunk.stringChunk(" ") ]))))), value(Data_Maybe.Nothing.value), metavar1(metavar2(Type_Proxy["Proxy"].value)) ]));
                };
            };
        };
    };
};
var cliOption1 = /* #__PURE__ */ cliOption(readMString);
var optParser = /* #__PURE__ */ (function () {
    return Data_Functor.map(Options_Applicative_Types.parserFunctor)(AppCliArgs)(Record_Extra.sequenceRecord()(Record_Extra.sequenceRecordCons(allDepsFileIsSymbol)()(Options_Applicative_Types.parserApply)(Record_Extra.sequenceRecordCons(classFileIsSymbol)()(Options_Applicative_Types.parserApply)(Record_Extra.sequenceRecordCons(modulesFileIsSymbol)()(Options_Applicative_Types.parserApply)(Record_Extra.sequenceRecordCons(packagesFileIsSymbol)()(Options_Applicative_Types.parserApply)(Record_Extra.sequenceRecordSingle(spagoFileIsSymbol)()(Options_Applicative_Types.parserFunctor)()())()())()())()())()())({
        classFile: cliOption1("class-file")(Data_Maybe.Nothing.value)(TsBridgeGen_UIText.cli.options.classFile)(defaults.classFile),
        modulesFile: cliOption1("modules-file")(Data_Maybe.Nothing.value)(TsBridgeGen_UIText.cli.options.modulesFile)(defaults.modulesFile),
        spagoFile: cliOption1("spago-file")(Data_Maybe.Nothing.value)(TsBridgeGen_UIText.cli.options.spagoFile)(defaults.spagoFile),
        packagesFile: cliOption1("packages-file")(Data_Maybe.Nothing.value)(TsBridgeGen_UIText.cli.options.packagesFile)(defaults.packagesFile),
        allDepsFile: cliOption1("all-deps-file")(Data_Maybe.Nothing.value)(TsBridgeGen_UIText.cli.options.allDepsFile)(defaults.allDepsFile)
    }));
})();
var getCliArgs = /* #__PURE__ */ (function () {
    var opts = Options_Applicative_Builder.info(Options_Applicative_Internal_Utils.apApplyFlipped(Options_Applicative_Types.parserApply)(optParser)(Options_Applicative_Extra.helper))(fold(Options_Applicative_Builder.infoModMonoid)([ Options_Applicative_Builder.fullDesc, Options_Applicative_Builder.header(TsBridgeGen_UIText.cli.header), Options_Applicative_Builder.footerDoc(Data_Newtype.unwrap()(Options_Applicative_Help_Chunk.vcatChunks([ Options_Applicative_Help_Chunk.stringChunk("Environment variables:"), Options_Applicative_Help_Chunk.tabulate([ new Data_Tuple.Tuple(extractChunk(Options_Applicative_Help_Chunk.stringChunk("DEBUG")), extractChunk(Options_Applicative_Help_Chunk.stringChunk("BOOLEAN"))) ]) ]))) ]));
    return liftEffect(Options_Applicative_Extra.execParser(opts));
})();
var getConfig = /* #__PURE__ */ bind1(getCliArgs)(function (cliArgs) {
    return bind1(getEnvVars)(function (envVars) {
        return pure1(mergeCfg(cliArgs)(envVars));
    });
});
export {
    AppConfig,
    getConfig,
    runInitM
};
