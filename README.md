# JSION
JavaScript-ish Object Notation - JSON with Comments
## Syntax
+ Comments start with a `#` and may contain any characters except `"/[]{},:`, and `\n`. To include `"/[]{},:` in comments, include a backslash in front to escape them.
+ Unlike in other implementations, JSION comments do not necessarily go until the end of the line. JSION comments stop at the first invalid character.
+ `#`s in keys and values are treaded literally and do not form comments.
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
+ JSION should work the same on a minified form as it does in an equivalent expanded form. (Newlines and whitespace should not matter.)
## Known Issues
+ Comments right before a number, boolean, or null are treated differently when minified.
