"use strict";
var JSION;
(function (JSION) {
    JSION.VERSION = Object.freeze({
        toString() { return `${JSION.VERSION.major}.${JSION.VERSION.minor}.${JSION.VERSION.patch}${JSION.VERSION.prerelease !== undefined ? `-${JSION.VERSION.prerelease}` : ''}${JSION.VERSION.metadata !== undefined ? `+${JSION.VERSION.metadata}` : ''}`; },
        major: 1, minor: 0, patch: 1
    });
    JSION.transpile = function (text) {
        // Character escapes, streaming?
        return text.replace(...compile({
            // Double quote strings
            [/(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])*(?<!\\)(?:\\{2})*"/.source]: text => text,
            // Single quote strings
            [/(?<!\\)(?:\\{2})*'(?:(?<!\\)(?:\\{2})*\\'|[^'])*(?<!\\)(?:\\{2})*'/.source]: text => `"${text.slice(1, -1).replace(/"/g, '\\"').replace(/\\'/g, "'")}"`,
            // Comments
            [/\(\*[\s\S]*?(?<!\\)(?:\\\\)*\*\)/.source]: () => '',
            // Unquoted keys
            [/[a-zA-Z_$][0-9a-zA-Z_$]*(?=\s*?:)/.source]: text => `"${text}"`,
            // Trailing commas
            [/,(?=\s*?[}\]])/.source]: () => '',
            // Empty array items
            [/(?<=\[)(\s*?)(?=,)|(?<=,)(\s*?)(?=[,\]])/.source]: text => text + 'null',
            // Empty object items
            [/(?<=:)(\s*?)(?=[,}])/.source]: text => text + 'null',
            // Null shorthand
            [/\?+/.source]: () => 'null',
            // Hex literals, octal literals, and binary literals
            [/\b(?:0b(?:[0-1](?:_[0-1])*?)+|0o(?:[0-7](?:_[0-7])*?)+|0x(?:[0-9a-fA-F](?:_[0-9a-fA-F])*?)+)\b/.source]: text => +text.replace(/_/g, '') + '',
            // Numeric seperators
            [/(?<=\d)_(?=\d)/.source]: () => ''
        }, 'g')).replace(/\n([^\S\n]*\n)+/g, '\n').trim();
    };
    JSION.parse = function parse(text, ...args) {
        return JSON.parse(JSION.transpile(text), ...args);
    };
    JSION.stringify = JSON.stringify;
    function compile(patterns, flags) {
        return [
            new RegExp(Object.keys(patterns).map((pattern, i) => `(?<_${i}>${pattern})`).join('|'), flags),
            function (...args) {
                const [i, text] = Object.entries(args.at(-1)).find(([, text]) => text != null);
                return Object.values(patterns)[+i.slice(1)](text);
            }
        ];
    }
})(JSION || (JSION = {}));
