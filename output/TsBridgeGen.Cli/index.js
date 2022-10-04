// Generated by purs version 0.15.4
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Control_Monad_Reader_Class from "../Control.Monad.Reader.Class/index.js";
import * as Control_Monad_Trans_Class from "../Control.Monad.Trans.Class/index.js";
import * as Control_Monad_Writer_Trans from "../Control.Monad.Writer.Trans/index.js";
import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Set from "../Data.Set/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Node_Path from "../Node.Path/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing_String from "../Parsing.String/index.js";
import * as Parsing_String_Replace from "../Parsing.String.Replace/index.js";
import * as Safe_Coerce from "../Safe.Coerce/index.js";
import * as TsBridgeGen_Core from "../TsBridgeGen.Core/index.js";
import * as TsBridgeGen_Monad from "../TsBridgeGen.Monad/index.js";
import * as TsBridgeGen_Print from "../TsBridgeGen.Print/index.js";
import * as TsBridgeGen_Types from "../TsBridgeGen.Types/index.js";
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit);
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);
var mapFlipped = /* #__PURE__ */ Data_Functor.mapFlipped(Data_Functor.functorArray);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Parsing.bindParserT);
var lift = /* #__PURE__ */ Control_Monad_Trans_Class.lift(Parsing.monadTransParserT);
var pure = /* #__PURE__ */ Control_Applicative.pure(Parsing.applicativeParserT);
var heytingAlgebraFunction = /* #__PURE__ */ Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean);
var conj = /* #__PURE__ */ Data_HeytingAlgebra.conj(heytingAlgebraFunction);
var or = /* #__PURE__ */ Data_Foldable.or(Data_Foldable.foldableArray)(heytingAlgebraFunction);
var and = /* #__PURE__ */ Data_Foldable.and(Data_Foldable.foldableArray)(heytingAlgebraFunction);
var not = /* #__PURE__ */ Data_HeytingAlgebra.not(/* #__PURE__ */ Data_HeytingAlgebra.heytingAlgebraFunction(heytingAlgebraFunction));
var importsIsSymbol = {
    reflectSymbol: function () {
        return "imports";
    }
};
var bindWriterT = /* #__PURE__ */ Control_Monad_Writer_Trans.bindWriterT(/* #__PURE__ */ Data_Semigroup.semigroupRecord()(/* #__PURE__ */ Data_Semigroup.semigroupRecordCons(importsIsSymbol)()(Data_Semigroup.semigroupRecordNil)(/* #__PURE__ */ Data_Set.semigroupSet(TsBridgeGen_Types.ordImport))));
var monoidRecord = /* #__PURE__ */ Data_Monoid.monoidRecord()(/* #__PURE__ */ Data_Monoid.monoidRecordCons(importsIsSymbol)(/* #__PURE__ */ Data_Set.monoidSet(TsBridgeGen_Types.ordImport))()(Data_Monoid.monoidRecordNil));
var applicativeWriterT = /* #__PURE__ */ Control_Monad_Writer_Trans.applicativeWriterT(monoidRecord);
var union = /* #__PURE__ */ Data_Set.union(TsBridgeGen_Types.ordImport);
var mapFlipped1 = /* #__PURE__ */ Data_Functor.mapFlipped(Data_Maybe.functorMaybe);
var map1 = /* #__PURE__ */ Data_Set.map(TsBridgeGen_Types.ordImport);
var monadRecWriterT = /* #__PURE__ */ Control_Monad_Writer_Trans.monadRecWriterT(monoidRecord);
var monadErrorWriterT = /* #__PURE__ */ Control_Monad_Writer_Trans.monadErrorWriterT(monoidRecord);
var monadLogWriterT = /* #__PURE__ */ TsBridgeGen_Monad.monadLogWriterT(monoidRecord);
var gDecodeJsonCons = /* #__PURE__ */ Data_Argonaut_Decode_Class.gDecodeJsonCons(/* #__PURE__ */ Data_Argonaut_Decode_Class.decodeFieldId(/* #__PURE__ */ Data_Argonaut_Decode_Class.decodeArray(TsBridgeGen_Types.decodeJsonModuleGlob)));
var decodeRecord = /* #__PURE__ */ Data_Argonaut_Decode_Class.decodeRecord(/* #__PURE__ */ gDecodeJsonCons(/* #__PURE__ */ gDecodeJsonCons(Data_Argonaut_Decode_Class.gDecodeJsonNil)({
    reflectSymbol: function () {
        return "include";
    }
})()())({
    reflectSymbol: function () {
        return "exclude";
    }
})()())();
var decodeRecord1 = /* #__PURE__ */ Data_Argonaut_Decode_Class.decodeRecord(Data_Argonaut_Decode_Class.gDecodeJsonNil)();
var coerce = /* #__PURE__ */ Safe_Coerce.coerce();
var toUnfoldable = /* #__PURE__ */ Data_Set.toUnfoldable(Data_Unfoldable.unfoldableArray);
var DhallTypeApp = /* #__PURE__ */ (function () {
    function DhallTypeApp(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DhallTypeApp.create = function (value0) {
        return function (value1) {
            return new DhallTypeApp(value0, value1);
        };
    };
    return DhallTypeApp;
})();
var DhallTypeId = /* #__PURE__ */ (function () {
    function DhallTypeId(value0) {
        this.value0 = value0;
    };
    DhallTypeId.create = function (value0) {
        return new DhallTypeId(value0);
    };
    return DhallTypeId;
})();
var DhallExprList = /* #__PURE__ */ (function () {
    function DhallExprList(value0) {
        this.value0 = value0;
    };
    DhallExprList.create = function (value0) {
        return new DhallExprList(value0);
    };
    return DhallExprList;
})();
var DhallExprString = /* #__PURE__ */ (function () {
    function DhallExprString(value0) {
        this.value0 = value0;
    };
    DhallExprString.create = function (value0) {
        return new DhallExprString(value0);
    };
    return DhallExprString;
})();
var DhallExprTypeAnnot = /* #__PURE__ */ (function () {
    function DhallExprTypeAnnot(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DhallExprTypeAnnot.create = function (value0) {
        return function (value1) {
            return new DhallExprTypeAnnot(value0, value1);
        };
    };
    return DhallExprTypeAnnot;
})();
var writeFileIfNotExists = function (dictMonadApp) {
    var Bind1 = ((dictMonadApp.MonadRec3()).Monad0()).Bind1();
    var bind2 = Control_Bind.bind(Bind1);
    var ask = Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0());
    var MonadError1 = dictMonadApp.MonadError1();
    var catchError = Control_Monad_Error_Class.catchError(MonadError1);
    var $$void = Data_Functor["void"]((Bind1.Apply0()).Functor0());
    var discard1 = discard(Bind1);
    var throwError = Control_Monad_Error_Class.throwError(MonadError1.MonadThrow0());
    return function (fallback) {
        return function (filePath) {
            return bind2(ask)(function (v) {
                return catchError($$void(v.capabilities.readTextFile(filePath)))(function (v1) {
                    if (v1 instanceof TsBridgeGen_Types.ErrReadFile) {
                        return bind2(fallback)(function (content) {
                            return discard1(v.capabilities.mkdirRec(Node_Path.dirname(filePath)))(function () {
                                return v.capabilities.writeTextFile(filePath)(content);
                            });
                        });
                    };
                    return throwError(v1);
                });
            });
        };
    };
};
var updateFile = function (dictMonadApp) {
    var Bind1 = ((dictMonadApp.MonadRec3()).Monad0()).Bind1();
    var bind2 = Control_Bind.bind(Bind1);
    var ask = Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0());
    var MonadError1 = dictMonadApp.MonadError1();
    var catchError = Control_Monad_Error_Class.catchError(MonadError1);
    var applyFirst = Control_Apply.applyFirst(Bind1.Apply0());
    var log = TsBridgeGen_Monad.log(dictMonadApp.MonadLog2());
    var throwError = Control_Monad_Error_Class.throwError(MonadError1.MonadThrow0());
    var discard1 = discard(Bind1);
    return function (fallback) {
        return function (filePath) {
            return function (f) {
                return bind2(ask)(function (v) {
                    return bind2(catchError(applyFirst(v.capabilities.readTextFile(filePath))(log(new TsBridgeGen_Types.LogLiteral("Patching module at " + filePath))))(function (v1) {
                        if (v1 instanceof TsBridgeGen_Types.ErrReadFile) {
                            return applyFirst(fallback)(log(new TsBridgeGen_Types.LogLiteral("Module at " + (filePath + " does not exist yet. Using a starter template."))));
                        };
                        return throwError(v1);
                    }))(function (content) {
                        return bind2(f(content))(function (content$prime) {
                            return discard1(v.capabilities.mkdirRec(Node_Path.dirname(filePath)))(function () {
                                return v.capabilities.writeTextFile(filePath)(content$prime);
                            });
                        });
                    });
                });
            };
        };
    };
};
var readAsset = function (dictMonadApp) {
    var bind2 = Control_Bind.bind(((dictMonadApp.MonadRec3()).Monad0()).Bind1());
    var ask = Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0());
    return function (path) {
        return bind2(ask)(function (v) {
            return v.capabilities.readTextFile(Node_Path.concat([ v.config.assetsDir, path ]));
        });
    };
};
var printDhallType = function (v) {
    if (v instanceof DhallTypeApp) {
        return printDhallType(v.value0) + (" " + printDhallType(v.value1));
    };
    if (v instanceof DhallTypeId) {
        return v.value0;
    };
    throw new Error("Failed pattern match at TsBridgeGen.Cli (line 311, column 18 - line 313, column 21): " + [ v.constructor.name ]);
};
var printDhallExpr = function (v) {
    if (v instanceof DhallExprList) {
        return "[\x0a" + (Data_String_Common.joinWith(",\x0a")(map(printDhallExpr)(v.value0)) + "\x0a]");
    };
    if (v instanceof DhallExprString) {
        return "\"" + (v.value0 + "\"");
    };
    if (v instanceof DhallExprTypeAnnot) {
        return printDhallExpr(v.value0) + (" : " + printDhallType(v.value1));
    };
    throw new Error("Failed pattern match at TsBridgeGen.Cli (line 305, column 18 - line 308, column 74): " + [ v.constructor.name ]);
};
var updateAllDepsFile = function (dictMonadApp) {
    var Monad0 = (dictMonadApp.MonadRec3()).Monad0();
    var bind2 = Control_Bind.bind(Monad0.Bind1());
    var ask = Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0());
    var pure1 = Control_Applicative.pure(Monad0.Applicative0());
    return function (v) {
        return function (v1) {
            return bind2(ask)(function (v2) {
                return bind2(v2.capabilities.spagoLsDepsTransitive)(function (deps) {
                    var dhallExpr = new DhallExprTypeAnnot(new DhallExprList(mapFlipped(deps)(function ($329) {
                        return DhallExprString.create((function (v3) {
                            return v3.packageName;
                        })($329));
                    })), new DhallTypeApp(new DhallTypeId("List"), new DhallTypeId("Text")));
                    return pure1(printDhallExpr(dhallExpr));
                });
            });
        };
    };
};
var parseStrToData = function (dictDecodeJson) {
    var decodeJson = Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson);
    return function (str) {
        return bind(lmap(TsBridgeGen_Types.ErrParseToJson.create)(TsBridgeGen_Core.parseToJson(str)))((function () {
            var $330 = lmap(TsBridgeGen_Types.ErrParseToData.create);
            return function ($331) {
                return $330(decodeJson($331));
            };
        })());
    };
};
var replaceComment = function (dictMonadRec) {
    return function (dictMonadError) {
        var MonadThrow0 = dictMonadError.MonadThrow0();
        var Monad0 = MonadThrow0.Monad0();
        var replaceT = Parsing_String_Replace.replaceT(Monad0)(dictMonadRec);
        var anyTill = Parsing_String.anyTill(Monad0);
        var lift1 = lift(Monad0);
        var $$try = Control_Monad_Error_Class["try"](dictMonadError);
        var catchError = Control_Monad_Error_Class.catchError(dictMonadError);
        var liftEither = Control_Monad_Error_Class.liftEither(MonadThrow0);
        var discard1 = discard(Monad0.Bind1());
        var throwError = Control_Monad_Error_Class.throwError(MonadThrow0);
        return function (dictMonadLog) {
            var log = TsBridgeGen_Monad.log(dictMonadLog);
            return function (dictDecodeJson) {
                var parseStrToData1 = parseStrToData(dictDecodeJson);
                return function (path) {
                    return function (id) {
                        return function (f) {
                            return function (i) {
                                return replaceT(i)(bind1(Parsing.position)(function (v) {
                                    return bind1(Parsing_String.string("{-GEN:" + (id + "\x0a")))(function (genStartOpen) {
                                        return bind1(anyTill(Parsing_String.string("\x0a-}\x0a")))(function (v1) {
                                            return bind1(anyTill(Parsing_String.string("\x0a{-GEN:END-}")))(function (v2) {
                                                var sourcePos = {
                                                    line: v.line,
                                                    column: v.column
                                                };
                                                return bind1(bind1(lift1($$try(catchError(liftEither(parseStrToData1(v1.value0)))(function (appError) {
                                                    return discard1(log(new TsBridgeGen_Types.LogError(new TsBridgeGen_Types.AtFilePosition(path, sourcePos, appError))))(function () {
                                                        return throwError(appError);
                                                    });
                                                }))))(Data_Either.either(Data_Function["const"](Parsing.fail("Cannot parse Json")))(pure)))(function (data_) {
                                                    return bind1(bind1(lift1($$try(catchError(f(data_)(v2.value0))(function (appError) {
                                                        return discard1(log(new TsBridgeGen_Types.LogError(new TsBridgeGen_Types.AtFilePosition(path, sourcePos, appError))))(function () {
                                                            return throwError(appError);
                                                        });
                                                    }))))(Data_Either.either(Data_Function["const"](Parsing.fail("Execution failure")))(pure)))(function (newContent) {
                                                        return pure(genStartOpen + (v1.value0 + (v1.value1 + ("\x0a" + (newContent + ("\x0a" + v2.value1))))));
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }));
                            };
                        };
                    };
                };
            };
        };
    };
};
var matchModuleGlob = function (v) {
    return function (v1) {
        return function (v2) {
            var replace = Data_String_Common.replaceAll(".")("/");
            return $foreign.match(replace(v))(replace(v1 + ("." + v2)));
        };
    };
};
var mapModule = function (opts) {
    return function (v) {
        var matcher = function (glob) {
            return matchModuleGlob(glob)(v.value0);
        };
        var filterName = conj(or(map(matcher)(opts.include)))(and(map(not(matcher))(opts.exclude)));
        return new TsBridgeGen_Types.PursModule(v.value0, Data_Array.filter(function ($332) {
            return filterName(TsBridgeGen_Core.getName($332));
        })(v.value1));
    };
};
var patchClassFile = function (dictMonadApp) {
    var MonadRec3 = dictMonadApp.MonadRec3();
    var Monad0 = MonadRec3.Monad0();
    var Bind1 = Monad0.Bind1();
    var bind2 = Control_Bind.bind(bindWriterT(Bind1));
    var genInstances = TsBridgeGen_Print.genInstances(Monad0);
    var Applicative0 = Monad0.Applicative0();
    var pure1 = Control_Applicative.pure(applicativeWriterT(Applicative0));
    var pure2 = Control_Applicative.pure(Applicative0);
    var bind3 = Control_Bind.bind(Bind1);
    var MonadError1 = dictMonadApp.MonadError1();
    var MonadLog2 = dictMonadApp.MonadLog2();
    var replaceComment1 = replaceComment(monadRecWriterT(MonadRec3))(monadErrorWriterT(MonadError1))(monadLogWriterT(MonadLog2))(decodeRecord);
    var replaceComment2 = replaceComment(MonadRec3)(MonadError1)(MonadLog2)(decodeRecord1);
    return function (path) {
        return function (defs) {
            return function (file) {
                var replaceInstances = function (opts) {
                    return function (v) {
                        return bind2(genInstances(mapFlipped(defs)(mapModule(opts))))(function (instances) {
                            return pure1(TsBridgeGen_Print.printPursSnippets(instances));
                        });
                    };
                };
                var replaceImports = function (imports) {
                    return function (v) {
                        return function (oldImports) {
                            return pure2(TsBridgeGen_Print.printImports(union(imports)(Data_Maybe.fromMaybe(Data_Set.empty)(mapFlipped1(TsBridgeGen_Core.parseUserImports(oldImports))(map1(TsBridgeGen_Types.ImportUser.create))))));
                        };
                    };
                };
                return bind3(TsBridgeGen_Print.runImportWriterT(replaceComment1(path)("instances")(replaceInstances)(file)))(function (v) {
                    return replaceComment2(path)("imports")(replaceImports(v.value1.imports))(v.value0);
                });
            };
        };
    };
};
var patchModulesFile = function (dictMonadApp) {
    var MonadRec3 = dictMonadApp.MonadRec3();
    var Monad0 = MonadRec3.Monad0();
    var Bind1 = Monad0.Bind1();
    var bind2 = Control_Bind.bind(bindWriterT(Bind1));
    var genTsProgram = TsBridgeGen_Print.genTsProgram(Monad0);
    var Applicative0 = Monad0.Applicative0();
    var pure1 = Control_Applicative.pure(applicativeWriterT(Applicative0));
    var pure2 = Control_Applicative.pure(Applicative0);
    var bind3 = Control_Bind.bind(Bind1);
    var MonadError1 = dictMonadApp.MonadError1();
    var MonadLog2 = dictMonadApp.MonadLog2();
    var replaceComment1 = replaceComment(monadRecWriterT(MonadRec3))(monadErrorWriterT(MonadError1))(monadLogWriterT(MonadLog2))(decodeRecord);
    var replaceComment2 = replaceComment(MonadRec3)(MonadError1)(MonadLog2)(decodeRecord1);
    return function (path) {
        return function (defs) {
            return function (file) {
                var replaceTsProgram = function (v) {
                    return function (v1) {
                        return bind2(genTsProgram(Data_Array.filter(function (v2) {
                            return !Data_Array["null"](v2.value1);
                        })(mapFlipped(defs)(mapModule(v)))))(function (tsProgram) {
                            return pure1(tsProgram);
                        });
                    };
                };
                var replaceImports = function (imports) {
                    return function (v) {
                        return function (oldImports) {
                            return pure2(TsBridgeGen_Print.printImports(union(imports)(Data_Maybe.fromMaybe(Data_Set.empty)(mapFlipped1(TsBridgeGen_Core.parseUserImports(oldImports))(map1(TsBridgeGen_Types.ImportUser.create))))));
                        };
                    };
                };
                return bind3(TsBridgeGen_Print.runImportWriterT(replaceComment1(path)("ts-program")(replaceTsProgram)(file)))(function (v) {
                    return replaceComment2(path)("imports")(replaceImports(v.value1.imports))(v.value0);
                });
            };
        };
    };
};
var getPaths = function (dictMonadApp) {
    var Bind1 = ((dictMonadApp.MonadRec3()).Monad0()).Bind1();
    var bind2 = Control_Bind.bind(Bind1);
    var ask = Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0());
    var mapFlipped2 = Data_Functor.mapFlipped((Bind1.Apply0()).Functor0());
    return function (globs) {
        return bind2(ask)(function (v) {
            return mapFlipped2(v.capabilities.expandGlobsCwd(coerce(globs)))(toUnfoldable);
        });
    };
};
var getPursModules = function (dictMonadApp) {
    var Monad0 = (dictMonadApp.MonadRec3()).Monad0();
    var bind2 = Control_Bind.bind(Monad0.Bind1());
    var ask = Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0());
    var getPaths1 = getPaths(dictMonadApp);
    var Applicative0 = Monad0.Applicative0();
    var $$for = Data_Traversable["for"](Applicative0)(Data_Traversable.traversableArray);
    var liftEither = Control_Monad_Error_Class.liftEither((dictMonadApp.MonadError1()).MonadThrow0());
    var pure1 = Control_Applicative.pure(Applicative0);
    return function (globs) {
        return bind2(ask)(function (v) {
            return bind2(getPaths1(globs))(function (paths) {
                return bind2($$for(paths)(v.capabilities.readTextFile))(function (sources) {
                    return bind2($$for(sources)(function ($333) {
                        return liftEither(TsBridgeGen_Core.parseCstModule($333));
                    }))(function (cstModules) {
                        return pure1(map(TsBridgeGen_Core.getPursModule)(cstModules));
                    });
                });
            });
        });
    };
};
var assets = {
    myTsBridgeClass: "MyTsBridgeClass.purs",
    myTsModules: "MyTsBridgeModules.purs",
    allDeps: "all-deps.dhall",
    packagesFile: "packages.dhall",
    spagoFile: "spago.dhall"
};
var app = function (dictMonadApp) {
    var Monad0 = (dictMonadApp.MonadRec3()).Monad0();
    var Bind1 = Monad0.Bind1();
    var bind2 = Control_Bind.bind(Bind1);
    var getPursModules1 = getPursModules(dictMonadApp);
    var discard1 = discard(Bind1);
    var updateFile1 = updateFile(dictMonadApp);
    var readAsset1 = readAsset(dictMonadApp);
    var patchClassFile1 = patchClassFile(dictMonadApp);
    var patchModulesFile1 = patchModulesFile(dictMonadApp);
    var updateAllDepsFile1 = updateAllDepsFile(dictMonadApp);
    var pure1 = Control_Applicative.pure(Monad0.Applicative0());
    var writeFileIfNotExists1 = writeFileIfNotExists(dictMonadApp);
    return bind2(Control_Monad_Reader_Class.ask(dictMonadApp.MonadAsk0()))(function (v) {
        return bind2(v.capabilities.spagoSources)(function (globs) {
            return bind2(getPursModules1(globs))(function (defs) {
                return discard1(updateFile1(readAsset1(assets.myTsBridgeClass))(v.config.classFile)(patchClassFile1(v.config.classFile)(defs)))(function () {
                    return discard1(updateFile1(readAsset1(assets.myTsModules))(v.config.modulesFile)(patchModulesFile1(v.config.modulesFile)(defs)))(function () {
                        return discard1(updateFile1(readAsset1(assets.allDeps))(v.config.allDepsFile)(updateAllDepsFile1(v.config.allDepsFile)))(function () {
                            return discard1(updateFile1(readAsset1(assets.packagesFile))(v.config.packagesFile)(pure1))(function () {
                                return writeFileIfNotExists1(readAsset1(assets.spagoFile))(v.config.spagoFile);
                            });
                        });
                    });
                });
            });
        });
    });
};
export {
    app,
    parseStrToData,
    patchClassFile,
    replaceComment
};
