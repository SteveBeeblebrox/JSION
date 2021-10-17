# JSION
JavaScript-ish Object Notation - JSON with Comments
## Syntax
+ Comments start with a `#` and may contain any characters except `"/[]{},:` and the words `true`, `false`, `null`, or a numerical literal. To include any reserved characters or words in comments, include a backslash in front to escape them.
+ Unlike in other implementations, JSION comments do not necessarily go until the end of the line. JSION comments stop at the first invalid character.
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
    "Phone #": "+10000000000", # Not my real #
    # This isn't real either "email": "user@example.com"
}
```
```
{ # User Profile JSION "Name": "Trinity", "Favorite Colors": ["#5ED7FF", # Blue "#F970FF", # Pink "#F7F7F7" # White], "Phone #": "+10000000000", # Not my real # # This isn't real either "email": "user@example.com" }
```
## Motivation & Goals
+ Any valid JSON should be valid JSION
+ JSION should work the same on a minified form as it does in an equivalent expanded form. (If minifing removes or changes that something, then it should not impact the parsing of comments.)
