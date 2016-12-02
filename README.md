#Strings.js#

###A javascript library for manipulating strings.###

```javascript
strings.capitalizeAll(string)
```

Capitalizes the first letter of every word in a string.

> Example: `strings.capitalizeAll("hello world")` &rarr; "Hello World"

```javascript
strings.capitalizeFirst(string)
```

Capitalizes the first letter of the first word in a string.

> Example: `strings.capitalizeFirst("hello world")` &rarr; "Hello world"

```javascript
strings.numberCommas(string)
```

Adds commas to a number string for thousands, millions, billions, and so on.

> Example: `strings.numberCommas("12345679.312")` &rarr; "12,345,679.312"

```javascript
strings.numberLakhs(string)
```

Adds commas to a number string for thousands, lakhs, crores, and so on.

> Example: `strings.numberLakhs("12345679.312")` &rarr; "1,23,45,679.312"

```javascript
strings.reverseLetters(string)
```

Reverses the order of the string's letters.

> Example: `strings.reverseLetter("hello world")` &rarr; "dlrow olleh"

```javascript
strings.reverseWords(string)
```

Reverses the order of the string's words.

> Example: `strings.reverseWords("hello world")` &rarr; "world hello"
