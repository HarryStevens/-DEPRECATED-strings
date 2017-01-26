#strings.js#

strings.js is a Javascript library for manipulating strings. Javascript has many [built-in methods for manipulating strings](http://www.w3schools.com/jsref/jsref_obj_string.asp). The functions in this library are meant to supplement those.

Each function can be used in two ways. First, a function can be used in the `strings` namespace (e.g. `strings.method("Hello world!")`); second, it can be used as a modification the native Javascript `String` object, which allows for applying multiple functions to a single string (e.g. `"12345.15".numberDecimals(1).numberCommas()` &rarr; 12,345.2).

##Functions##

`strings.numberCommas(string)` OR `string.numberCommas()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adds commas to a number string for thousands, millions, billions, and so on.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.numberCommas("12345679.312")` &rarr; "12,345,679.312"

`strings.numberLakhs(string)` OR `string.numberLakhs()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adds commas to a number string for thousands, lakhs, crores, and so on.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.numberLakhs("12345679.312")` &rarr; "1,23,45,679.312"

`strings.numberDecimals(string, number)` OR `string.numberDecimals(number)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rounds a number string, both float and integer, to the nearest specified decimal place.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.numberDecimals("12345679.312", 4)` &rarr; "12345679.3120"

`strings.numberPrependZeros(string, number)` OR `string.numberPrependZeros(number)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adds zeros before a string so that the length of the string equals a given number of characters. Does nothing to the string if it is already longer than the number of characters.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.numberPrependZeros("1234", 6)` &rarr; "001234"

`strings.reverseLetters(string)` OR `string.reverseLetters()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reverses the order of the string's letters.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.reverseLetters("hello world")` &rarr; "dlrow olleh"

`strings.reverseWords(string)` OR `string.reverseWords()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reverses the order of the string's words.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.reverseWords("hello world")` &rarr; "world hello"

`strings.removeCommas(string)` OR `string.removeCommas()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remove commas from a string.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.removeCommas("123,456,789")` &rarr; "123456789"

`strings.toCamelCase(string)` OR `string.toCamelCase()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transforms a string into camel case.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.toCamelCase("Hello world!")` &rarr; "helloWorld"

`strings.toSentenceCase(string)` OR `string.toSentenceCase()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capitalizes the first letter of the first word in a string.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.toSentenceCase("hello world")` &rarr; "Hello world"

`strings.toSlugCase(string)` OR `string.toSlugCase()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transforms a string into a slug.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.toSlugCase("Hello world!")` &rarr; "hello-world"

`strings.toStartCase(string)` OR `string.toStartCase()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capitalizes the first letter of every word in a string.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.toStartCase("hello world")` &rarr; "Hello World"

`strings.toTitleCase(string, array)` OR `string.toTitleCase(array)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transforms a string into title case, where the first letter of every word is capitalized except for certain prepositions, articles and conjunctions. You can include an optional array to ignore strings of your choice, such as acronyms.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`strings.toTitleCase("james comey to remain on as FBI director", ["FBI"])` &rarr; "[James Comey to Remain on as FBI Director](http://www.nbcnews.com/news/us-news/comey-remain-fbi-director-n711506)"
