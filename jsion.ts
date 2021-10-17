namespace JSION {
    const COMMENT_PATTERN = /\\"|"(?:\\"|[^"])*"|(#[\s\S]*?)(?=(?<!\\|\\\d+)(?:true|false|null|\d+|[",:{}[\]]))/g;
    export function parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any {
        return JSON.parse(text.replace(COMMENT_PATTERN, function(substring: string, ...args: any[]) {
            if(!args[0]) return substring
            return ''
        }), reviver);
    }
    export let stringify = JSON.stringify;
}
