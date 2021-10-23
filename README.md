# JSION ![GitHub](https://img.shields.io/github/license/SteveBeeblebrox/JSION?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveBeeblebrox/JSION?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues-raw/SteveBeeblebrox/JSION?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SteveBeeblebrox/JSION?style=flat-square) ![GitHub contributors](https://img.shields.io/github/contributors/SteveBeeblebrox/JSION?color=007EC6&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/SteveBeeblebrox/JSION?style=flat-square)
**J**ava**S**cript-**i**sh **O**bject **N**otation - JSON with comments, single quote strings, unquoted property names, and trailing commas
## Files
+ `jsion.ts` - TypeScript source for JSION
+ `jsion.js` - Ready to use JavaScript
+ More languages coming soon...
## Syntax
Aside from the following features, JSION is identical to standard JSON.
### Comments
Text between `(` and `)` is treated as a comment. Comments may be place anywhere except inside of string keys and values. To include a `)` in a comment, escape it with a backslash.
```
{
    (User Profile (As of 2021\) )
    "name": "Trinity", (First name)
    "favorite colors": [
        "#5ED7FF", (Pink)
        "#F970FF", (Blue)
        "#F7F7F7" (White)
    ],
    "id" (Hexadecimal digits): "8a04081"
}
```
### Unquoted Property Names
Propery names containing only alphanumeric characters and underscores do not need to be placed in quotes.
```
{
    name: "Trinity",
    "favorite colors": [
        "#5ED7FF",
        "#F970FF",
        "#F7F7F7"
    ],
    id: "8a04081"
}
```
### Trailing Commas
Just like in JavaScript, trailing comments after a value are valid in objects and arrays.
```
{
    "name": "Trinity",
    "favorite colors": [
        "#5ED7FF",
        "#F970FF",
        "#F7F7F7",
    ],
    "id": "8a04081",
}
```
### Single Quoted Strings (NYI)
Strings (keys and values) can use single quotes instead of double quotes. When using single quotes, double quotes do not need to be escaped.
```
{
    'name': 'Trinity',
    'favorite colors': [
        '#5ED7FF',
        '#F970FF',
        '#F7F7F7',=
    ],
    'id': '8a04081'
}
```
## Complete Example
### JSION
```
{
    (User Profile (v1.0.0\))
    name: "Trinity",
    nickname: "Trin",
    "favorite colors": [
        '#5ED7FF', (Pink)
        '#F970FF', (Blue)
        '#F7F7F7', (White)
    ],
    'contact info': {
        (Fake contact info)
        phone_number: '+10000000000',
        email_address: 'example@example.com',
    },
    quotes: [
        '"I like cake 🎂"',
        "\"Hello World!\"",
        '"Isn\'t this cool?"'
    ],
    id: 142,
    active: true (Signed in recently?)
}
```
### Minified JSION
```

```
### JSON
```
{
  "name": "Trinity",
  "nickname": "Trin",
  "favorite colors": [
    "#5ED7FF",
    "#F970FF",
    "#F7F7F7"
  ],
  "contact info": {
    "phone_number": "+10000000000",
    "email_address": "example@example.com"
  },
  "quotes": [
    "\"I like cake 🎂\"",
    "\"Hello World!\"",
    "\"Isn't this cool?\""
  ],
  "id": 142,
  "active": true
}
```
### Minified JSON
```

```
## Motivation & Goals
+ Any valid JSON should be valid JSION
+ JSION should work the same on a minified form as it does in an equivalent expanded form.
