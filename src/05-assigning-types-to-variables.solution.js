"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
var defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    isAdmin: true,
};
var getUserId = function (user) {
    return user.id;
};
(0, vitest_1.it)("Should get the user id", function () {
    (0, vitest_1.expect)(getUserId(defaultUser)).toEqual(1);
});
