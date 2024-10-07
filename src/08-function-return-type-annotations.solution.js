"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
var makeUser = function () {
    return {
        id: 1,
        firstName: "Matt",
        lastName: "Pocock",
        role: "admin",
        posts: [
            {
                id: 1,
                title: "How I eat so much cheese",
            },
        ],
    };
};
(0, vitest_1.it)("Should return a valid user", function () {
    var user = makeUser();
    (0, vitest_1.expect)(user.id).toBeTypeOf("number");
    (0, vitest_1.expect)(user.firstName).toBeTypeOf("string");
    (0, vitest_1.expect)(user.lastName).toBeTypeOf("string");
    (0, vitest_1.expect)(user.role).to.be.oneOf(["super-admin", "admin", "user"]);
    (0, vitest_1.expect)(user.posts[0].id).toBeTypeOf("number");
    (0, vitest_1.expect)(user.posts[0].title).toBeTypeOf("string");
});
