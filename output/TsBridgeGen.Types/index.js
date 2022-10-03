// Generated by purs version 0.15.4
import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Show_Generic from "../Data.Show.Generic/index.js";
import * as TypedEnv from "../TypedEnv/index.js";
var genericShowArgsArgument = /* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(Data_Show.showString);
var genericShowConstructor = /* #__PURE__ */ Data_Show_Generic.genericShowConstructor(genericShowArgsArgument);
var genericShowArgsProduct = /* #__PURE__ */ Data_Show_Generic.genericShowArgsProduct(genericShowArgsArgument);
var genericShowConstructor1 = /* #__PURE__ */ Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsNoArguments);
var genericShowSum = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ genericShowArgsProduct(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ Data_Show.showArray(Data_Show.showString))))({
    reflectSymbol: function () {
        return "ErrSpawn";
    }
}));
var genericShowSum1 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor1({
    reflectSymbol: function () {
        return "ErrParseModule";
    }
}));
var genericShowSum2 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor({
    reflectSymbol: function () {
        return "ErrReadFile";
    }
}));
var genericShowSum3 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor({
    reflectSymbol: function () {
        return "ErrWriteFile";
    }
}));
var genericShowSum4 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor1({
    reflectSymbol: function () {
        return "ErrExpandGlobs";
    }
}));
var genericShowSum5 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(TypedEnv.showEnvError))({
    reflectSymbol: function () {
        return "ErrParseEnvVars";
    }
}));
var genericShowSum6 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor({
    reflectSymbol: function () {
        return "ErrLiteral";
    }
}));
var genericShowSum7 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(Data_Argonaut_Decode_Error.showJsonDecodeError))({
    reflectSymbol: function () {
        return "ErrParseToData";
    }
}));
var genericShowSum8 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor1({
    reflectSymbol: function () {
        return "ErrUnknown";
    }
}));
var AtFilePositionIsSymbol = {
    reflectSymbol: function () {
        return "AtFilePosition";
    }
};
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var eq2 = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Eq.eqArray(Data_Eq.eqString));
var eq3 = /* #__PURE__ */ Data_Eq.eq(TypedEnv.eqEnvError);
var eq4 = /* #__PURE__ */ Data_Eq.eq(Data_Argonaut_Decode_Error.eqJsonDecodeError);
var SourcePosition = function (x) {
    return x;
};
var Name = function (x) {
    return x;
};
var DefData = /* #__PURE__ */ (function () {
    function DefData(value0) {
        this.value0 = value0;
    };
    DefData.create = function (value0) {
        return new DefData(value0);
    };
    return DefData;
})();
var DefNewtype = /* #__PURE__ */ (function () {
    function DefNewtype(value0) {
        this.value0 = value0;
    };
    DefNewtype.create = function (value0) {
        return new DefNewtype(value0);
    };
    return DefNewtype;
})();
var DefType = /* #__PURE__ */ (function () {
    function DefType(value0) {
        this.value0 = value0;
    };
    DefType.create = function (value0) {
        return new DefType(value0);
    };
    return DefType;
})();
var DefValue = /* #__PURE__ */ (function () {
    function DefValue(value0) {
        this.value0 = value0;
    };
    DefValue.create = function (value0) {
        return new DefValue(value0);
    };
    return DefValue;
})();
var DefUnsupportedInstAndExport = /* #__PURE__ */ (function () {
    function DefUnsupportedInstAndExport(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DefUnsupportedInstAndExport.create = function (value0) {
        return function (value1) {
            return new DefUnsupportedInstAndExport(value0, value1);
        };
    };
    return DefUnsupportedInstAndExport;
})();
var DefUnsupportedExport = /* #__PURE__ */ (function () {
    function DefUnsupportedExport(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DefUnsupportedExport.create = function (value0) {
        return function (value1) {
            return new DefUnsupportedExport(value0, value1);
        };
    };
    return DefUnsupportedExport;
})();
var ModuleName = function (x) {
    return x;
};
var PursModule = /* #__PURE__ */ (function () {
    function PursModule(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    PursModule.create = function (value0) {
        return function (value1) {
            return new PursModule(value0, value1);
        };
    };
    return PursModule;
})();
var ModuleGlob = function (x) {
    return x;
};
var ImportAuto = /* #__PURE__ */ (function () {
    function ImportAuto(value0) {
        this.value0 = value0;
    };
    ImportAuto.create = function (value0) {
        return new ImportAuto(value0);
    };
    return ImportAuto;
})();
var ImportUser = /* #__PURE__ */ (function () {
    function ImportUser(value0) {
        this.value0 = value0;
    };
    ImportUser.create = function (value0) {
        return new ImportUser(value0);
    };
    return ImportUser;
})();
var Glob = function (x) {
    return x;
};
var UnexpectedTokenAtPos = /* #__PURE__ */ (function () {
    function UnexpectedTokenAtPos(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    UnexpectedTokenAtPos.create = function (value0) {
        return function (value1) {
            return new UnexpectedTokenAtPos(value0, value1);
        };
    };
    return UnexpectedTokenAtPos;
})();
var UnexpectedEndOfInput = /* #__PURE__ */ (function () {
    function UnexpectedEndOfInput() {

    };
    UnexpectedEndOfInput.value = new UnexpectedEndOfInput();
    return UnexpectedEndOfInput;
})();
var Other = /* #__PURE__ */ (function () {
    function Other(value0) {
        this.value0 = value0;
    };
    Other.create = function (value0) {
        return new Other(value0);
    };
    return Other;
})();
var WarnLiteral = /* #__PURE__ */ (function () {
    function WarnLiteral(value0) {
        this.value0 = value0;
    };
    WarnLiteral.create = function (value0) {
        return new WarnLiteral(value0);
    };
    return WarnLiteral;
})();
var ErrSpawn = /* #__PURE__ */ (function () {
    function ErrSpawn(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ErrSpawn.create = function (value0) {
        return function (value1) {
            return new ErrSpawn(value0, value1);
        };
    };
    return ErrSpawn;
})();
var ErrParseModule = /* #__PURE__ */ (function () {
    function ErrParseModule() {

    };
    ErrParseModule.value = new ErrParseModule();
    return ErrParseModule;
})();
var ErrReadFile = /* #__PURE__ */ (function () {
    function ErrReadFile(value0) {
        this.value0 = value0;
    };
    ErrReadFile.create = function (value0) {
        return new ErrReadFile(value0);
    };
    return ErrReadFile;
})();
var ErrWriteFile = /* #__PURE__ */ (function () {
    function ErrWriteFile(value0) {
        this.value0 = value0;
    };
    ErrWriteFile.create = function (value0) {
        return new ErrWriteFile(value0);
    };
    return ErrWriteFile;
})();
var ErrExpandGlobs = /* #__PURE__ */ (function () {
    function ErrExpandGlobs() {

    };
    ErrExpandGlobs.value = new ErrExpandGlobs();
    return ErrExpandGlobs;
})();
var ErrParseEnvVars = /* #__PURE__ */ (function () {
    function ErrParseEnvVars(value0) {
        this.value0 = value0;
    };
    ErrParseEnvVars.create = function (value0) {
        return new ErrParseEnvVars(value0);
    };
    return ErrParseEnvVars;
})();
var ErrLiteral = /* #__PURE__ */ (function () {
    function ErrLiteral(value0) {
        this.value0 = value0;
    };
    ErrLiteral.create = function (value0) {
        return new ErrLiteral(value0);
    };
    return ErrLiteral;
})();
var ErrParseToJson = /* #__PURE__ */ (function () {
    function ErrParseToJson(value0) {
        this.value0 = value0;
    };
    ErrParseToJson.create = function (value0) {
        return new ErrParseToJson(value0);
    };
    return ErrParseToJson;
})();
var ErrParseToData = /* #__PURE__ */ (function () {
    function ErrParseToData(value0) {
        this.value0 = value0;
    };
    ErrParseToData.create = function (value0) {
        return new ErrParseToData(value0);
    };
    return ErrParseToData;
})();
var ErrUnknown = /* #__PURE__ */ (function () {
    function ErrUnknown() {

    };
    ErrUnknown.value = new ErrUnknown();
    return ErrUnknown;
})();
var AtFilePosition = /* #__PURE__ */ (function () {
    function AtFilePosition(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    AtFilePosition.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new AtFilePosition(value0, value1, value2);
            };
        };
    };
    return AtFilePosition;
})();
var LogLiteral = /* #__PURE__ */ (function () {
    function LogLiteral(value0) {
        this.value0 = value0;
    };
    LogLiteral.create = function (value0) {
        return new LogLiteral(value0);
    };
    return LogLiteral;
})();
var LogError = /* #__PURE__ */ (function () {
    function LogError(value0) {
        this.value0 = value0;
    };
    LogError.create = function (value0) {
        return new LogError(value0);
    };
    return LogError;
})();
var genericSourcePosition_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showSourcePosition = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericSourcePosition_)(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ Data_Show.showRecord()()(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "column";
        }
    })(/* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
        reflectSymbol: function () {
            return "line";
        }
    })(Data_Show.showInt))(Data_Show.showInt))))({
        reflectSymbol: function () {
            return "SourcePosition";
        }
    }))
};
var genericShowArgsArgument1 = /* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showSourcePosition);
var genericShowArgsProduct1 = /* #__PURE__ */ Data_Show_Generic.genericShowArgsProduct(genericShowArgsArgument1);
var genericPursModule_ = {
    to: function (x) {
        return new PursModule(x.value0, x.value1);
    },
    from: function (x) {
        return new Data_Generic_Rep.Product(x.value0, x.value1);
    }
};
var genericPursDef_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new DefData(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && x.value0 instanceof Data_Generic_Rep.Inl) {
            return new DefNewtype(x.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0 instanceof Data_Generic_Rep.Inl)) {
            return new DefType(x.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0 instanceof Data_Generic_Rep.Inl))) {
            return new DefValue(x.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))) {
            return new DefUnsupportedInstAndExport(x.value0.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value0.value1);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr)))) {
            return new DefUnsupportedExport(x.value0.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value0.value1);
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 60, column 1 - line 60, column 34): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof DefData) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof DefNewtype) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0));
        };
        if (x instanceof DefType) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)));
        };
        if (x instanceof DefValue) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))));
        };
        if (x instanceof DefUnsupportedInstAndExport) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(new Data_Generic_Rep.Product(x.value0, x.value1))))));
        };
        if (x instanceof DefUnsupportedExport) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Product(x.value0, x.value1))))));
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 60, column 1 - line 60, column 34): " + [ x.constructor.name ]);
    }
};
var genericName_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showName = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericName_)(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "Name";
        }
    }))
};
var genericShowArgsArgument2 = /* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showName);
var genericShowConstructor2 = /* #__PURE__ */ Data_Show_Generic.genericShowConstructor(genericShowArgsArgument2);
var genericShowConstructor3 = /* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsProduct(genericShowArgsArgument2)(genericShowArgsArgument));
var showPursDef = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericPursDef_)(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor2({
        reflectSymbol: function () {
            return "DefData";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor2({
        reflectSymbol: function () {
            return "DefNewtype";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor2({
        reflectSymbol: function () {
            return "DefType";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor2({
        reflectSymbol: function () {
            return "DefValue";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor3({
        reflectSymbol: function () {
            return "DefUnsupportedInstAndExport";
        }
    }))(/* #__PURE__ */ genericShowConstructor3({
        reflectSymbol: function () {
            return "DefUnsupportedExport";
        }
    })))))))
};
var genericModuleName_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showModuleName = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericModuleName_)(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "ModuleName";
        }
    }))
};
var showPursModule = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericPursModule_)(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsProduct(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showModuleName))(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ Data_Show.showArray(showPursDef))))({
        reflectSymbol: function () {
            return "PursModule";
        }
    }))
};
var genericErrorParseToJson_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new UnexpectedTokenAtPos(x.value0.value0, x.value0.value1);
        };
        if (x instanceof Data_Generic_Rep.Inr && x.value0 instanceof Data_Generic_Rep.Inl) {
            return UnexpectedEndOfInput.value;
        };
        if (x instanceof Data_Generic_Rep.Inr && x.value0 instanceof Data_Generic_Rep.Inr) {
            return new Other(x.value0.value0);
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 66, column 1 - line 66, column 43): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof UnexpectedTokenAtPos) {
            return new Data_Generic_Rep.Inl(new Data_Generic_Rep.Product(x.value0, x.value1));
        };
        if (x instanceof UnexpectedEndOfInput) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(Data_Generic_Rep.NoArguments.value));
        };
        if (x instanceof Other) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(x.value0));
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 66, column 1 - line 66, column 43): " + [ x.constructor.name ]);
    }
};
var showErrorParseToJson = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericErrorParseToJson_)(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ genericShowArgsProduct(genericShowArgsArgument1))({
        reflectSymbol: function () {
            return "UnexpectedTokenAtPos";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor1({
        reflectSymbol: function () {
            return "UnexpectedEndOfInput";
        }
    }))(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "Other";
        }
    }))))
};
var genericShowSum9 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showErrorParseToJson))({
    reflectSymbol: function () {
        return "ErrParseToJson";
    }
}));
var genericAppWarning_ = {
    to: function (x) {
        return new WarnLiteral(x);
    },
    from: function (x) {
        return x.value0;
    }
};
var showAppWarning = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericAppWarning_)(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "WarnLiteral";
        }
    }))
};
var genericAppLog_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new LogLiteral(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new LogError(x.value0);
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 64, column 1 - line 64, column 33): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof LogLiteral) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof LogError) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 64, column 1 - line 64, column 33): " + [ x.constructor.name ]);
    }
};
var genericAppError_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new ErrSpawn(x.value0.value0, x.value0.value1);
        };
        if (x instanceof Data_Generic_Rep.Inr && x.value0 instanceof Data_Generic_Rep.Inl) {
            return ErrParseModule.value;
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0 instanceof Data_Generic_Rep.Inl)) {
            return new ErrReadFile(x.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0 instanceof Data_Generic_Rep.Inl))) {
            return new ErrWriteFile(x.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))) {
            return ErrExpandGlobs.value;
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl))))) {
            return new ErrParseEnvVars(x.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))))) {
            return new ErrLiteral(x.value0.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl))))))) {
            return new ErrParseToJson(x.value0.value0.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))))))) {
            return new ErrParseToData(x.value0.value0.value0.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl))))))))) {
            return ErrUnknown.value;
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr))))))))) {
            return new AtFilePosition(x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value1.value0, x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value1.value1);
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 98, column 1 - line 98, column 35): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof ErrSpawn) {
            return new Data_Generic_Rep.Inl(new Data_Generic_Rep.Product(x.value0, x.value1));
        };
        if (x instanceof ErrParseModule) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(Data_Generic_Rep.NoArguments.value));
        };
        if (x instanceof ErrReadFile) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)));
        };
        if (x instanceof ErrWriteFile) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))));
        };
        if (x instanceof ErrExpandGlobs) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(Data_Generic_Rep.NoArguments.value)))));
        };
        if (x instanceof ErrParseEnvVars) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))))));
        };
        if (x instanceof ErrLiteral) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)))))));
        };
        if (x instanceof ErrParseToJson) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))))))));
        };
        if (x instanceof ErrParseToData) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)))))))));
        };
        if (x instanceof ErrUnknown) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(Data_Generic_Rep.NoArguments.value))))))))));
        };
        if (x instanceof AtFilePosition) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Product(x.value0, new Data_Generic_Rep.Product(x.value1, x.value2))))))))))));
        };
        throw new Error("Failed pattern match at TsBridgeGen.Types (line 98, column 1 - line 98, column 35): " + [ x.constructor.name ]);
    }
};
var genericShow = /* #__PURE__ */ Data_Show_Generic.genericShow(genericAppError_);
var showAppError = {
    show: function (x) {
        return genericShow(genericShowSum(genericShowSum1(genericShowSum2(genericShowSum3(genericShowSum4(genericShowSum5(genericShowSum6(genericShowSum9(genericShowSum7(genericShowSum8(Data_Show_Generic.genericShowConstructor(genericShowArgsProduct(genericShowArgsProduct1(Data_Show_Generic.genericShowArgsArgument(showAppError))))(AtFilePositionIsSymbol))))))))))))(x);
    }
};
var showAppLog = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericAppLog_)(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "LogLiteral";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showAppError))({
        reflectSymbol: function () {
            return "LogError";
        }
    })))
};
var eqSourcePosition = {
    eq: function (x) {
        return function (y) {
            return x.column === y.column && x.line === y.line;
        };
    }
};
var eq5 = /* #__PURE__ */ Data_Eq.eq(eqSourcePosition);
var eqName = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var eq6 = /* #__PURE__ */ Data_Eq.eq(eqName);
var eqPursDef = {
    eq: function (x) {
        return function (y) {
            if (x instanceof DefData && y instanceof DefData) {
                return eq6(x.value0)(y.value0);
            };
            if (x instanceof DefNewtype && y instanceof DefNewtype) {
                return eq6(x.value0)(y.value0);
            };
            if (x instanceof DefType && y instanceof DefType) {
                return eq6(x.value0)(y.value0);
            };
            if (x instanceof DefValue && y instanceof DefValue) {
                return eq6(x.value0)(y.value0);
            };
            if (x instanceof DefUnsupportedInstAndExport && y instanceof DefUnsupportedInstAndExport) {
                return eq6(x.value0)(y.value0) && x.value1 === y.value1;
            };
            if (x instanceof DefUnsupportedExport && y instanceof DefUnsupportedExport) {
                return eq6(x.value0)(y.value0) && x.value1 === y.value1;
            };
            return false;
        };
    }
};
var eq7 = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Eq.eqArray(eqPursDef));
var ordName = {
    compare: function (x) {
        return function (y) {
            return compare(x)(y);
        };
    },
    Eq0: function () {
        return eqName;
    }
};
var compare1 = /* #__PURE__ */ Data_Ord.compare(ordName);
var eqModuleName = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var eq8 = /* #__PURE__ */ Data_Eq.eq(eqModuleName);
var eqPursModule = {
    eq: function (x) {
        return function (y) {
            return eq8(x.value0)(y.value0) && eq7(x.value1)(y.value1);
        };
    }
};
var ordModuleName = {
    compare: function (x) {
        return function (y) {
            return compare(x)(y);
        };
    },
    Eq0: function () {
        return eqModuleName;
    }
};
var compare2 = /* #__PURE__ */ Data_Ord.compare(ordModuleName);
var eqImport = {
    eq: function (x) {
        return function (y) {
            if (x instanceof ImportAuto && y instanceof ImportAuto) {
                return eq6(x.value0.as)(y.value0.as) && eq8(x.value0.from)(y.value0.from);
            };
            if (x instanceof ImportUser && y instanceof ImportUser) {
                return x.value0 === y.value0;
            };
            return false;
        };
    }
};
var ordImport = {
    compare: function (x) {
        return function (y) {
            if (x instanceof ImportAuto && y instanceof ImportAuto) {
                var v = compare1(x.value0.as)(y.value0.as);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return compare2(x.value0.from)(y.value0.from);
            };
            if (x instanceof ImportAuto) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ImportAuto) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ImportUser && y instanceof ImportUser) {
                return compare(x.value0)(y.value0);
            };
            throw new Error("Failed pattern match at TsBridgeGen.Types (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqImport;
    }
};
var eqErrorParseToJson = {
    eq: function (x) {
        return function (y) {
            if (x instanceof UnexpectedTokenAtPos && y instanceof UnexpectedTokenAtPos) {
                return x.value0 === y.value0 && eq5(x.value1)(y.value1);
            };
            if (x instanceof UnexpectedEndOfInput && y instanceof UnexpectedEndOfInput) {
                return true;
            };
            if (x instanceof Other && y instanceof Other) {
                return x.value0 === y.value0;
            };
            return false;
        };
    }
};
var eq9 = /* #__PURE__ */ Data_Eq.eq(eqErrorParseToJson);
var eqAppError = {
    eq: function (x) {
        return function (y) {
            if (x instanceof ErrSpawn && y instanceof ErrSpawn) {
                return x.value0 === y.value0 && eq2(x.value1)(y.value1);
            };
            if (x instanceof ErrParseModule && y instanceof ErrParseModule) {
                return true;
            };
            if (x instanceof ErrReadFile && y instanceof ErrReadFile) {
                return x.value0 === y.value0;
            };
            if (x instanceof ErrWriteFile && y instanceof ErrWriteFile) {
                return x.value0 === y.value0;
            };
            if (x instanceof ErrExpandGlobs && y instanceof ErrExpandGlobs) {
                return true;
            };
            if (x instanceof ErrParseEnvVars && y instanceof ErrParseEnvVars) {
                return eq3(x.value0)(y.value0);
            };
            if (x instanceof ErrLiteral && y instanceof ErrLiteral) {
                return x.value0 === y.value0;
            };
            if (x instanceof ErrParseToJson && y instanceof ErrParseToJson) {
                return eq9(x.value0)(y.value0);
            };
            if (x instanceof ErrParseToData && y instanceof ErrParseToData) {
                return eq4(x.value0)(y.value0);
            };
            if (x instanceof ErrUnknown && y instanceof ErrUnknown) {
                return true;
            };
            if (x instanceof AtFilePosition && y instanceof AtFilePosition) {
                return x.value0 === y.value0 && eq5(x.value1)(y.value1) && Data_Eq.eq(eqAppError)(x.value2)(y.value2);
            };
            return false;
        };
    }
};
var eq10 = /* #__PURE__ */ Data_Eq.eq(eqAppError);
var eqAppLog = {
    eq: function (x) {
        return function (y) {
            if (x instanceof LogLiteral && y instanceof LogLiteral) {
                return x.value0 === y.value0;
            };
            if (x instanceof LogError && y instanceof LogError) {
                return eq10(x.value0)(y.value0);
            };
            return false;
        };
    }
};
var decodeJsonModuleGlob = Data_Argonaut_Decode_Class.decodeJsonString;
var decodeJsonGlob = Data_Argonaut_Decode_Class.decodeJsonString;
export {
    ErrSpawn,
    ErrParseModule,
    ErrReadFile,
    ErrWriteFile,
    ErrExpandGlobs,
    ErrParseEnvVars,
    ErrLiteral,
    ErrParseToJson,
    ErrParseToData,
    ErrUnknown,
    AtFilePosition,
    LogLiteral,
    LogError,
    SourcePosition,
    WarnLiteral,
    Glob,
    ModuleGlob,
    ModuleName,
    Name,
    PursModule,
    ImportAuto,
    ImportUser,
    DefData,
    DefNewtype,
    DefType,
    DefValue,
    DefUnsupportedInstAndExport,
    DefUnsupportedExport,
    UnexpectedTokenAtPos,
    UnexpectedEndOfInput,
    Other,
    genericPursDef_,
    genericName_,
    genericPursModule_,
    genericModuleName_,
    genericAppLog_,
    genericAppWarning_,
    genericErrorParseToJson_,
    genericSourcePosition_,
    eqPursModule,
    eqModuleName,
    eqPursDef,
    eqName,
    eqImport,
    eqAppLog,
    ordModuleName,
    ordName,
    ordImport,
    showPursDef,
    showName,
    showPursModule,
    showModuleName,
    showAppLog,
    showAppWarning,
    genericAppError_,
    eqSourcePosition,
    eqAppError,
    eqErrorParseToJson,
    showAppError,
    showErrorParseToJson,
    showSourcePosition,
    decodeJsonGlob,
    decodeJsonModuleGlob
};
