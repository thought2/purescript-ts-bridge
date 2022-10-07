// Generated by purs version 0.15.4
import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var lift2 = /* #__PURE__ */ Control_Apply.lift2(Test_QuickCheck_Gen.applyGen);
var checkCommutativeRingGen = function (dictCommutativeRing) {
    var mul = Data_Semiring.mul((dictCommutativeRing.Ring0()).Semiring0());
    return function (dictEq) {
        var eq = Data_Eq.eq(dictEq);
        return function (gen) {
            var commutativeMultiplication = function (a) {
                return function (b) {
                    return eq(mul(a)(b))(mul(b)(a));
                };
            };
            return function __do() {
                Effect_Console.log("Checking 'Commutative multiplication' law for CommutativeRing")();
                return quickCheck$prime(1000)(lift2(commutativeMultiplication)(gen)(gen))();
            };
        };
    };
};
var checkCommutativeRing = function (dictCommutativeRing) {
    var checkCommutativeRingGen1 = checkCommutativeRingGen(dictCommutativeRing);
    return function (dictArbitrary) {
        var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
        return function (dictEq) {
            var checkCommutativeRingGen2 = checkCommutativeRingGen1(dictEq);
            return function (v) {
                return checkCommutativeRingGen2(arbitrary);
            };
        };
    };
};
export {
    checkCommutativeRing,
    checkCommutativeRingGen
};