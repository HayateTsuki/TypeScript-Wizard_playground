"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var tryCatchDemo = function (state) {
    try {
        if (state === "fail") {
            throw new Error("Failure!");
        }
    }
    catch (e) {
        return e.message;
    }
};
(0, vitest_1.it)("Should return the message when it fails", function () {
    (0, vitest_1.expect)(tryCatchDemo("fail")).toEqual("Failure!");
});
