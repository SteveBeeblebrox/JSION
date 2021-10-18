# JSION ![GitHub](https://img.shields.io/github/license/SteveBeeblebrox/JSION?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveBeeblebrox/JSION?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues-raw/SteveBeeblebrox/JSION?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SteveBeeblebrox/JSION?style=flat-square) ![GitHub contributors](https://img.shields.io/github/contributors/SteveBeeblebrox/JSION?color=007EC6&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/SteveBeeblebrox/JSION?style=flat-square)
JavaScript-ish Object Notation - JSON with Comments
## Syntax
+ Comments start with a `#` and may contain any characters except `"/[]{},:` and the words `true`, `false`, `null`, or a numerical literal. To include any reserved characters or words in comments, include a backslash in front to escape them. To escape words, a backslash is only needed before the first character. Words must be escaped even if part of another word (For example, the `false` in `falsetto` must be still escaped).
+ Unlike in other implementations, JSION comments do not necessarily go until the end of the line. JSION comments stop at the first unescaped forbidden character.
+ `#`s in keys and string values are treaded literally and do not form comments.
### Examples
```
{
    # User Profile JSION
    "Name": "Trinity",
    "Favorite Colors": [
        "#5ED7FF", # Blue
        "#F970FF", # Pink
        "#F7F7F7"  # White
    ],
    "id": # A user ID like \1234 56789,
    "Phone #": "+10000000000", # Not my real #
    # This isn't real either "email": "user@example.com"
}
```
```
{ # User Profile JSION "Name": "Trinity", "Favorite Colors": ["#5ED7FF", # Blue "#F970FF", # Pink "#F7F7F7" # White], "id": # A user ID like \1234 56789, "Phone #": "+10000000000", # Not my real # # This isn't real either "email": "user@example.com" }
```
## Motivation & Goals
+ Any valid JSON should be valid JSION
+ JSION should work the same on a minified form as it does in an equivalent expanded form. (If minifing removes or changes that something, then it should not impact the parsing of comments.)
