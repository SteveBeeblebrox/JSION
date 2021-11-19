# JSION ![GitHub](https://img.shields.io/github/license/SteveBeeblebrox/JSION?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveBeeblebrox/JSION?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues-raw/SteveBeeblebrox/JSION?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SteveBeeblebrox/JSION?style=flat-square) ![GitHub contributors](https://img.shields.io/github/contributors/SteveBeeblebrox/JSION?color=007EC6&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/SteveBeeblebrox/JSION?style=flat-square)
**J**ava**S**cript-**i**sh **O**bject **N**otation - JSON with comments, single quote strings, unquoted property names, trailing commas, and other quality of life features
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
    (User Profile (v1.0.0\))
    "name": "Trinity",
    "active": true (Signed in recently?)
}
```
### Unquoted Property Names
Property names starting with a letter, an underscore, or a dollar sign followed by only other alphanumeric characters, dollar signs, and underscores do not need to be placed in quotes. This is similar to JavaScript except that higher Unicode letters and zero width spaces are not allowed.
```
{
    name: "Trinity",
    nickname: "Trin",
    "contact info": {
        phone_number: "+10000000000",
        email_address: "example@example.com"
    }
}
```
### Trailing Commas
Just like in JavaScript, trailing commas after a value are valid in objects and arrays.
```
{
    "favorite colors": [
        "#5ED7FF",
        "#F970FF",
        "#F7F7F7",
    ],
    "contact info": {
        "phone_number": "+10000000000",
        "email_address": "example@example.com",
    },
}
```
### Single Quoted Strings
Strings (keys and values) can use single quotes (`'`) instead of double quotes (`"`). When using single quotes, double quotes do not need to be escaped.
```
{
    'name': 'Trinity',
    'favorite colors': [
        '#5ED7FF'
        '#F970FF'
        '#F7F7F7'
    ],
    'quotes': [
        '"I like cake 🎂"',
        "\"Hello World!\"",
        '"Isn\'t this cool?"'
    ]
}
```
### Numeric Separators
Underscores (`_`) can be placed within numbers to improve readability. Underscores may not directly precede or follow a decimal point or an `e` or `E` if using exponential notation.
```
{
    "id": 1_42
}
```
### Shorthahand Null
A question mark (`?`) may be used in place of `null`.
```
{
    "profile picture": ?
}
```
### Implicit Null Items
`null` is automatically inserted between adjacent commas (`.`). Note that this is done after trailing comma removal. `null` is also inserted between a colon (`:`) and a comma or a colon and a closing brace (`}`).
```
{
    "high scores": [100,,120,117,,,142],
    "favorite band": ,
    "favorite song":
}
```
<!--### Automatic Commas
Commas (`,`) are optional after values in an object. If no value is present and the next part of the object is anohter key, this also works with implicit null values. (WIP)
```
{
    "favorite color": "pink"
    "lucky number": 142
}
```-->
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
    id: 1_42,
    active: true, (Signed in recently?)
    "profile picture": ?
}
```
### Minified JSION
```
{(User Profile (v1.0.0\))name:"Trinity",nickname:"Trin","favorite colors": ['#5ED7FF',(Pink)'#F970FF',(Blue)'#F7F7F7',(White)],'contact info':{(Fake contact info)phone_number:'+10000000000',email_address:'example@example.com',},quotes:['"I like cake 🎂"',"\"Hello World!\"",'"Isn\'t this cool?"'],id:1_42,active:true,(Signed in recently?)"profile picture":?}
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
  "active": true,
  "profile picture": null
}
```
### Minified JSON
```
{"name":"Trinity","nickname":"Trin","favorite colors":["#5ED7FF","#F970FF","#F7F7F7"],"contact info":{"phone_number":"+10000000000","email_address":"example@example.com"},"quotes":["\"I like cake 🎂\"","\"Hello World!\"","\"Isn't this cool?\""],"id":142,"active":true,"profile picture":null}
```
## Motivation & Goals
+ Any valid JSON should be valid JSION
+ JSION should work the same on a minified form as it does in an equivalent expanded form.

## Planned Features
+ Optimizations (Combine some Regular Expressions that overlap).
+ Allow semicolons to be used in place of commas.
+ Expand the stringify method to support inserting comments through a symbol property.
+ Improve error messages when trying to use implicit nulls between commas and not in an arrays.
+ Additional number formats for positive signs, hexadecimal, octadecimal, and more.
