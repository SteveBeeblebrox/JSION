"use strict";
var JSION;
(function (JSION) {
    const COMMENT_PATTERN = /\\"|"(?:\\"|[^"])*"|(#[\s\S]*?)(?=(?<!\\|\\\d+)(?:true|false|null|\d+|[",:{}[\]]))/g;
    function parse(text, reviver) {
        return JSON.parse(text.replace(COMMENT_PATTERN, function (substring, ...args) {
            if (!args[0])
                return substring;
            return '';
        }), reviver);
    }
    JSION.parse = parse;
    JSION.stringify = JSON.stringify;
})(JSION || (JSION = {}));
