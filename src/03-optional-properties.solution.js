"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
var vitest_1 = require("vitest");
var getName = function (params) {
    if (params.last) {
        return "".concat(params.first, " ").concat(params.last);
    }
    return params.first;
};
exports.getName = getName;
(0, vitest_1.it)("Should work with just the first name", function () {
    var name = (0, exports.getName)({
        first: "Matt",
    });
    (0, vitest_1.expect)(name).toEqual("Matt");
});
(0, vitest_1.it)("Should work with the first and last name", function () {
    var name = (0, exports.getName)({
        first: "Matt",
        last: "Pocock",
    });
    (0, vitest_1.expect)(name).toEqual("Matt Pocock");
});
