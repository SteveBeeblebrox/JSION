namespace JSION {
    const
        COMMENT_PATTERN = /\\"|"(?:\\"|[^"])*"|(\([\S\s]*?(?<!\\)(?:\\\\)*\))/g,
        KEY_PATTERN = /\\"|"(?:\\"|[^"])*"|(\w*)(?=\s*?:)/g,
        TRAILING_COMMA_PATTERN = /\\"|"(?:\\"|[^"])*"|(,)(?=\s*?[}\]])/g;
    export function parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any {
        return JSON.parse(text.replace(COMMENT_PATTERN, function(substring: string, ...args: any[]) {
            if(!args[0]) return substring
            return ''
        }).replace(KEY_PATTERN, function(substring: string, ...args: any[]) {
            if(!args[0]) return substring
            return `"${args[0]}"`
        }).replace(TRAILING_COMMA_PATTERN, function(substring: string, ...args: any[]) {
            if(!args[0]) return substring
            return ''
        }), reviver);
    }
    export let stringify = JSON.stringify;
}
