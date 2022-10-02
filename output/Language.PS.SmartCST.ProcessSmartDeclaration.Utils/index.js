// Generated by purs version 0.15.4
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var findOrNew = function (find) {
    return function ($$new) {
        return function (array) {
            var v = Data_Array.findIndex(find)(array);
            if (v instanceof Data_Maybe.Nothing) {
                return Data_Array.snoc(array)($$new(Data_Unit.unit));
            };
            if (v instanceof Data_Maybe.Just) {
                return array;
            };
            throw new Error("Failed pattern match at Language.PS.SmartCST.ProcessSmartDeclaration.Utils (line 17, column 3 - line 19, column 27): " + [ v.constructor.name ]);
        };
    };
};
var findAndModifyOrNew = function (find) {
    return function (modify) {
        return function ($$new) {
            return function (array) {
                var v = Data_Array.findIndex(find)(array);
                if (v instanceof Data_Maybe.Nothing) {
                    return Data_Array.snoc(array)($$new(Data_Unit.unit));
                };
                if (v instanceof Data_Maybe.Just) {
                    return Data_Maybe.fromMaybe(array)(Data_Array.modifyAt(v.value0)(modify)(array));
                };
                throw new Error("Failed pattern match at Language.PS.SmartCST.ProcessSmartDeclaration.Utils (line 11, column 3 - line 13, column 79): " + [ v.constructor.name ]);
            };
        };
    };
};
export {
    findAndModifyOrNew,
    findOrNew
};