"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addListener = function (onFocusChange) {
    window.addEventListener("focus", function () {
        onFocusChange(true);
    });
    window.addEventListener("blur", function () {
        onFocusChange(false);
    });
};
addListener(function (isFocused) {
    console.log({ isFocused: isFocused });
});
