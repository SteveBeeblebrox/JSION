namespace JSION {
    const COMMENT_PATTERN = /(?<=\\"|"(?:\\"|[^"])*")|(?:#(?:\\"|[^"\\\n])*)/gm;
    export function parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any {
        return JSON.parse(text.replace(COMMENT_PATTERN, ''), reviver);
    }
    export let stringify = JSON.stringify;
}
