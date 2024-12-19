namespace JSION {
    export const VERSION: Readonly<{major: number, minor: number, patch: number, metadata?: string, prerelease?: string, toString(): string}> = Object.freeze({
        toString() {return `${VERSION.major}.${VERSION.minor}.${VERSION.patch}${VERSION.prerelease !== undefined ? `-${VERSION.prerelease}` : ''}${VERSION.metadata !== undefined ? `+${VERSION.metadata}` : ''}`},
        major: 1, minor: 0, patch: 3
    });

    export const transpile = function(text: string): string {

        // Character escapes, streaming?
        return text.replace(...compile({
            // Double quote strings
            [/(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])*(?<!\\)(?:\\{2})*"/.source]: text => text,
            // Single quote strings
            [/(?<!\\)(?:\\{2})*'(?:(?<!\\)(?:\\{2})*\\'|[^'])*(?<!\\)(?:\\{2})*'/.source]: text => `"${text.slice(1,-1).replace(/"/g, '\\"').replace(/\\'/g,"'")}"`,
            // Comments
            [/\(\*[\s\S]*?(?<!\\)(?:\\\\)*\*\)/.source]: () => '',
        },'g')).replace(...compile({
            // Double quote strings
            [/(?<!\\)(?:\\{2})*"(?:(?<!\\)(?:\\{2})*\\"|[^"])*(?<!\\)(?:\\{2})*"/.source]: text => text,
            // Unquoted keys
            [/[a-zA-Z_$][0-9a-zA-Z_$]*(?=\s*?:)/.source]: text => `"${text}"`,
            // Empty array items
            [/(?<=[\[,])\s*?,(?=\s*?])|(?<=[\[,])\s*?(?=,)/.source]: text => 'null',
            // Trailing commas
            [/,(?=\s*?[}\]])/.source]: () => '',
            // Empty object items
            [/(?<=:)(\s*?)(?=[,}])/.source]: text => text + 'null',
            // Null shorthand
            [/\?+/.source]: () => 'null',
            // Hex literals, octal literals, and binary literals
            [/\b(?:0b(?:[0-1](?:_[0-1])*?)+|0o(?:[0-7](?:_[0-7])*?)+|0x(?:[0-9a-fA-F](?:_[0-9a-fA-F])*?)+)\b/.source]: text => +text.replace(/_/g,'')+'',
            // Numeric seperators
            [/(?<=\d)_(?=\d)/.source]: () => ''
        },'g')).replace(/\n([^\S\n]*\n)+/g,'\n').trim();
    }

    export const parse: typeof JSON.parse = function parse(text, ...args) {
        return JSON.parse(JSION.transpile(text),...args);
    }
    
    export const stringify: typeof JSON.stringify = JSON.stringify;

    function compile(patterns: Record<string,(text:string) => string>, flags?: string): [RegExp, (...args:any[]) => string] {
        return [
            new RegExp(Object.keys(patterns).map((pattern,i) => `(?<_${i}>${pattern})`).join('|'), flags),
            function(...args: any[]) {
                const [i,text] = Object.entries(args.at(-1) as Record<string,string>).find(([,text])=>text != null)!;
                return Object.values(patterns)[+i.slice(1)](text);
            }
        ];
    }
}
