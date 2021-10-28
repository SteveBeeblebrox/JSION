"use strict";
var JSION;
(function (JSION) {
    const SINGLE_QUOTE_PATTERN = /(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])+(?<!\\)(?:\\{2})*"|'([\S\s]*?(?<!\\)(?:\\\\)*)'/g, COMMENT_PATTERN = /(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])+(?<!\\)(?:\\{2})*"|(\([\S\s]*?(?<!\\)(?:\\\\)*\))/g, KEY_PATTERN = /(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])+(?<!\\)(?:\\{2})*"|([a-zA-Z_$][0-9a-zA-Z_$]*)(?=\s*?:)/g, TRAILING_COMMA_PATTERN = /(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])+(?<!\\)(?:\\{2})*"|(,)(?=\s*?[}\]])/g, NUMBER_SEPERATOR = /(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])+(?<!\\)(?:\\{2})*"|(?<=\d)(_)(?=\d)/g;
    function parse(text, reviver) {
        return JSON.parse(text.replace(SINGLE_QUOTE_PATTERN, function (substring, ...args) {
            if (!args[0])
                return substring;
            return `"${args[0].replace(/"/g, '\\"').replace(/\\'/g, "'")}"`;
        }).replace(COMMENT_PATTERN, function (substring, ...args) {
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
        }).replace(NUMBER_SEPERATOR, function (substring, ...args) {
            if (!args[0])
                return substring;
            return '';
        }), reviver);
    }
    JSION.parse = parse;
    JSION.stringify = JSON.stringify;
})(JSION || (JSION = {}));
