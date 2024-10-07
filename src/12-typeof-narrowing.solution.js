"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var coerceAmount = function (amount) {
    if (typeof amount === "number") {
        return amount;
    }
    return amount.amount;
};
(0, vitest_1.it)("Should return the amount when passed an object", function () {
    (0, vitest_1.expect)(coerceAmount({ amount: 20 })).toEqual(20);
});
(0, vitest_1.it)("Should return the amount when passed a number", function () {
    (0, vitest_1.expect)(coerceAmount(20)).toEqual(20);
});
