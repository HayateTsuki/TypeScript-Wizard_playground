"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var createCache = function () {
    var cache = {};
    var add = function (id, value) {
        cache[id] = value;
    };
    var remove = function (id) {
        delete cache[id];
    };
    return {
        cache: cache,
        add: add,
        remove: remove,
    };
};
(0, vitest_1.it)("Should add values to the cache", function () {
    var cache = createCache();
    cache.add("123", "Matt");
    (0, vitest_1.expect)(cache.cache["123"]).toEqual("Matt");
});
(0, vitest_1.it)("Should remove values from the cache", function () {
    var cache = createCache();
    cache.add("123", "Matt");
    cache.remove("123");
    (0, vitest_1.expect)(cache.cache["123"]).toEqual(undefined);
});
