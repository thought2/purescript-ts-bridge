// Generated by purs version 0.15.4
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Language_PS_CST_Types_Leafs from "../Language.PS.CST.Types.Leafs/index.js";
var show = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_Maybe.showMaybe(Language_PS_CST_Types_Leafs.showModuleName));
var eq = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Maybe.eqMaybe(Language_PS_CST_Types_Leafs.eqModuleName));
var compare = /* #__PURE__ */ Data_Ord.compare(/* #__PURE__ */ Data_Maybe.ordMaybe(Language_PS_CST_Types_Leafs.ordModuleName));
var QualifiedName = function (x) {
    return x;
};
var showQualifiedName = function (dictShow) {
    var show1 = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(QualifiedName { qualModule = " + (show(v.qualModule) + (", qualName = " + (show1(v.qualName) + " })")));
        }
    };
};
var newtypeQualifiedName = {
    Coercible0: function () {
        return undefined;
    }
};
var functorQualifiedName = {
    map: function (f) {
        return function (m) {
            return {
                qualName: f(m.qualName),
                qualModule: m.qualModule
            };
        };
    }
};
var eqQualifiedName = function (dictEq) {
    var eq1 = Data_Eq.eq(dictEq);
    return {
        eq: function (x) {
            return function (y) {
                return eq(x.qualModule)(y.qualModule) && eq1(x.qualName)(y.qualName);
            };
        }
    };
};
var ordQualifiedName = function (dictOrd) {
    var compare1 = Data_Ord.compare(dictOrd);
    var eqQualifiedName1 = eqQualifiedName(dictOrd.Eq0());
    return {
        compare: function (x) {
            return function (y) {
                var v = compare(x.qualModule)(y.qualModule);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return compare1(x.qualName)(y.qualName);
            };
        },
        Eq0: function () {
            return eqQualifiedName1;
        }
    };
};
export {
    QualifiedName,
    functorQualifiedName,
    newtypeQualifiedName,
    eqQualifiedName,
    ordQualifiedName,
    showQualifiedName
};