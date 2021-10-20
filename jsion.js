"use strict";
var JSION;
(function (JSION) {
    const COMMENT_PATTERN = /\\"|"(?:\\"|[^"])*"|(\([\S\s]*?(?<!\\)(?:\\\\)*\))/g, KEY_PATTERN = /\\"|"(?:\\"|[^"])*"|(\w*)(?=\s*?:)/g, TRAILING_COMMA_PATTERN = /\\"|"(?:\\"|[^"])*"|(,)(?=\s*?[}\]])/g;
    function parse(text, reviver) {
        return JSON.parse(text.replace(COMMENT_PATTERN, function (substring, ...args) {
            if (!args[0])
                return substring;
            return '';
        }).replace(KEY_PATTERN, function (substring, ...args) {
            if (!args[0])
                return substring;
            return `"${args[0]}"`;
        }).replace(TRAILING_COMMA_PATTERN, function (substring, ...args) {
            if (!args[0])
                return substring;
            return '';
        }), reviver);
    }
    JSION.parse = parse;
    JSION.stringify = JSON.stringify;
})(JSION || (JSION = {}));
