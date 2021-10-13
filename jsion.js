"use strict";
var JSION;
(function (JSION) {
    const COMMENT_PATTERN = /(?<=\\"|"(?:\\"|[^"])*")|(?:#(?:\\"|[^"\\\n])*)/gm;
    function parse(text, reviver) {
        return JSON.parse(text.replace(COMMENT_PATTERN, ''), reviver);
    }
    JSION.parse = parse;
    JSION.stringify = JSON.stringify;
})(JSION || (JSION = {}));
