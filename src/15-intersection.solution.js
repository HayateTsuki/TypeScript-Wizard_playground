"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultUserAndPosts = void 0;
var getDefaultUserAndPosts = function () {
    return {
        id: "1",
        firstName: "Matt",
        lastName: "Pocock",
        posts: [
            {
                id: "1",
                title: "How I eat so much cheese",
                body: "It's pretty edam difficult",
            },
        ],
    };
};
exports.getDefaultUserAndPosts = getDefaultUserAndPosts;
var userAndPosts = (0, exports.getDefaultUserAndPosts)();
console.log(userAndPosts.posts[0]);
