# JSION ![GitHub](https://img.shields.io/github/license/SteveBeeblebrox/JSION?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveBeeblebrox/JSION?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues-raw/SteveBeeblebrox/JSION?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SteveBeeblebrox/JSION?style=flat-square) ![GitHub contributors](https://img.shields.io/github/contributors/SteveBeeblebrox/JSION?color=007EC6&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/SteveBeeblebrox/JSION?style=flat-square)
**J**ava**S**cript-**i**sh **O**bject **N**otation - A superset of JSON with comments, single quote strings, unquoted property names, trailing commas, and other quality of life features
## Files
+ `jsion.ts` - TypeScript source for JSION

```ts
// JSION TypeScript API
namespace JSION {
    const transpile: (text: string) => string;
    const parse: typeof JSON.parse;
    const stringify: typeof JSON.stringify;
}
```
+ `jsion.js` - Ready to use JavaScript
+ More languages coming soon...
## Syntax
JSION adds the following features to standard JSON.
### Comments
Text between `(*` and `*)` is treated as a comment. Comments may be placed anywhere except inside of string keys and values. To include a `*)` in a comment, escape the asterisk it with a backslash. JSION has no single line comments since it may be minified just like JSON.
```ml
{
    (* User Profile (v1.0.0) *)
    "name": "Trinity",
    "admin": true (* Does user have admin powers? *)
}
```
### Unquoted Property Names
If a property name is a simple JavaScript-like identifier (`[a-zA-Z_$][0-9a-zA-Z_$]*`), the surrounding quotes may be omitted.
```js
{
    name: "Trinity",
    nickname: "Trin"
}
```
### Trailing Commas
Just like in JavaScript, trailing commas after a value are ignored in objects and arrays.
```js
{
    "activity": [
        "2021",
        "2022",
        "2024",
    ],
}
```
### Single Quoted Strings
Strings (as both keys and values) can use single quotes instead of double quotes. When using single quotes, double quotes do not need to be escaped, but internal single quotes do.
```js
{
    'recent posts': [
        '"🔥 Heat from fire..."',
        "\"Hello World!\"",
        '"Isn\'t this cool?"'
    ]
}
```
### Numeric Separators
Single underscores can be placed within numbers between digits to improve readability. Underscores may not directly precede or follow a decimal point or an `e` or `E` if using exponential notation.
```js
{
    "points": 1_000_000
}
```

### Additional Numeric Literals
JSION supports hexadecimal, octal, and binary integer literals. These all support the aforementioned numeric separators.
```js
{
    "colors": [
        0xAD4674,
        0xC8_7F_93,
        0o74571362,
        0b111001001101001011000110,
        0b0111_1011_0100_1100_0011_1010
    ]
}

```

### Shorthand Null
One or more question marks may be used in place of `null`.
```js
{
    "profile picture": ???
}
```

### Implicit Null Items
Missing values in objects and arrays are interpreted as null. Note that trailing comma removal in arrays happens after!
```js
{
    "alt text": ,
    "icons": [,"admin",,,"flower",,]
}
```
<!--### Automatic Commas
Commas (`,`) are optional after values in an object. If no value is present and the next part of the object is another key, this also works with implicit null values. (WIP)
```
{
    "favorite color": "pink"
    "lucky number": 142
}
```-->

## Complete Example
<!--
```
function ecws(text: string) {
    return text.replaceAll(/[\t\n]/g,t=>`&#${t.charCodeAt(0)};`).replaceAll(/\\/g,'\\\\')
}
```
-->
|          | JSION | JSON |
| -------- | ----- | ---- | 
| Expanded | <pre lang=js>&#10;{&#10;    (\* User Profile (v1.0.0) \*)&#10;    name: 'Trinity',&#10;    nickname: 'Trin',&#10;    admin: true (\* Does user have admin powers? \*),&#10;    activity: [&#10;        "2021", "2022", "2024",&#10;    ],&#10;    'recent posts': [&#10;        '"🔥 Heat from fire..."',&#10;        "\\"Hello World!\\"",&#10;        '"Isn\\'t this cool?"',&#10;    ],&#10;    points: 1_000_000,&#10;    colors: [&#10;        0xAD4674,&#10;        0xC8_7F_93,&#10;        0o74571362,&#10;        0b111001001101001011000110,&#10;        0b0111_1011_0100_1100_0011_1010,&#10;    ],&#10;    "profile picture": ???,&#10;    "alt text": ,&#10;    icons: [,"admin",,,"flower",,],&#10;}&#10;</pre> | <pre lang=js>{&#10;    "name": "Trinity",&#10;    "nickname": "Trin",&#10;    "admin": true ,&#10;    "activity": [&#10;        "2021", "2022", "2024"&#10;    ],&#10;    "recent posts": [&#10;        "\\"🔥 Heat from fire...\\"",&#10;        "\\"Hello World!\\"",&#10;        "\\"Isn't this cool?\\""&#10;    ],&#10;    "points": 1000000,&#10;    "colors": [&#10;        11355764,&#10;        13139859,&#10;        15921906,&#10;        14996166,&#10;        8080442&#10;    ],&#10;    "profile picture": null,&#10;    "alt text": null,&#10;    "icons": [null,"admin",null,null,"flower",null]&#10;}</pre> |
| Minified | <pre lang=js>&#10;{(\*User Profile (v1.0.0)\*)name:'Trinity',&#10;nickname:'Trin',admin:true(\*Does user have admin &#10;powers?\*),activity:["2021","2022","2024"],&#10;'recent posts':['"🔥 Heat from fire..."',&#10;"\\"Hello World!\\"",'"Isn\\'t this cool?"'],points:&#10;1000000,colors:[0xAD4674,0xC8_7F_93,0o74571362,&#10;0b111001001101001011000110,0b011110110100110000111010&#10;],"profile picture":,"alt text":,"icons":[,"admin",,,&#10;"flower",,]}&#10;</pre> | <pre lang=js>{"name":"Trinity","nickname":"Trin",&#10;"admin":true,"activity":["2021","2022","2024"],&#10;"recent posts":["\\"🔥 Heat from fire...\\"",&#10;"\\"Hello World!\\"","\\"Isn't this cool?\\""],&#10;"points":1000000,"colors":[11355764,13139859,&#10;15921906,14996166,8080442],"profile picture":null,&#10;"alt text":null,"icons":[null,"admin",null,null,&#10;"flower",null]}</pre> |

## Motivation & Goals
+ JSION is designed for easier human use (like config files); when exchanging between machines, use JSON
+ JSION should work the same regardless of being minified or expanded
+ JSION must be a superset of JSON (All valid JSON is valid JSION and has the same meaning)

## Planned Features
+ Optimizations
+ Allow semicolons to be used in place of commas
+ Optional commas in objects
+ Expand the stringify method to support inserting comments
+ Expand the stringify method to use shorter space saving formats when possible
+ Improve error messages
+ Additional number formats for positive signs and more
