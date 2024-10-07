"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var guitarists = new Set();
guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");
(0, vitest_1.it)("Should contain Jimi and Eric", function () {
    (0, vitest_1.expect)(guitarists.has("Jimi Hendrix")).toEqual(true);
    (0, vitest_1.expect)(guitarists.has("Eric Clapton")).toEqual(true);
});
(0, vitest_1.it)("Should give a type error when you try to pass a non-string", function () {
    // @ts-expect-error
    guitarists.add(2);
});
(0, vitest_1.it)("Should be typed as an array of strings", function () {
    var guitaristsAsArray = Array.from(guitarists);
});
