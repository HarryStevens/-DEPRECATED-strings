#strings.js#

strings.js is a Javascript library for manipulating strings. Javascript has many [built-in methods for manipulating strings](http://www.w3schools.com/jsref/jsref_obj_string.asp). The functions in this library are meant to supplement those.

##API Reference##
* [Cases](#cases)
* [Numbers](#numbers)
* [Transformations](#transformations)

###Cases###

Functions for change the case of words and characters.

<a name="toCamelCase" href="#toCamelCase">#</a> strings.<b>toCamelCase</b>(<i>string</i>)

Transforms a string into camel case. `strings.toCamelCase("Hello world!") // "helloWorld"`

<a name="toSentenceCase" href="#toSentenceCase">#</a> strings.<b>toSentenceCase</b>(<i>string</i>)

Capitalizes the first letter of the first word in a string.

<a name="toSlugCase" href="#toSlugCase">#</a> strings.<b>toSlugCase</b>(<i>string</i>)

Transforms a string into a slug. `strings.toSlugCase("Hello world!") // "hello-world"`

<a name="toStartCase" href="#toStartCase">#</a> strings.<b>toStartCase</b>(<i>string</i>)

Capitalizes the first letter of every word in a string.

<a name="toTitleCase" href="#toTitleCase">#</a> strings.<b>toTitleCase</b>(<i>string</i>[, <i>array</i>])

Transforms a string into title case, where the first letter of every word is capitalized except for certain prepositions, articles and conjunctions. You can include an optional array to ignore strings of your choice, such as acronyms. `strings.toTitleCase("james comey to remain on as FBI director", ["FBI"]) // "James Comey to Remain on as FBI Director"`

###Numbers###

Functions for manipulating numbers as strings.

<a name="numberCommas" href="#numberCommas">#</a> strings.<b>numberCommas</b>(<i>string</i>)

Adds commas to a number string for thousands, millions, billions, and so on.

<a name="numberDecimals" href="#numberDecimals">#</a> strings.<b>numberDecimals</b>(<i>string</i>, <i>number</i>)

Rounds a number string, both float and integer, to the nearest specified decimal place. `strings.numberDecimals("1.235", 2) // "1.24"`

<a name="numberLakhs" href="#numberLakhs">#</a> strings.<b>numberLakhs</b>(<i>string</i>)

Adds commas to a number string for thousands, lakhs, crores, and so on. This is according to the [Indian numbering system](https://en.wikipedia.org/wiki/Indian_numbering_system).

<a name="numberPrependZeros" href="#numberPrependZeros">#</a> strings.<b>numberPrependZeros</b>(<i>string</i>, <i>number</i>)

Adds zeros before a string so that the length of the string equals a given number of characters. Does nothing to the string if it is already longer than the number of characters. `strings.numberPrependZeros("1234", 6) // "001234"`

###Transformations###

Functions for applying various transformations to strings.

<a name="removeCommas" href="#removeCommas">#</a> strings.<b>removeCommas</b>(<i>string</i>)

Remove commas from a string.

<a name="removeTags" href="#removeTags">#</a> strings.<b>removeTags</b>(<i>string</i>[, <i>array</i>])

Remove HTML tags from a string. You can pass an optional array with the tags you want to keep. `strings.removeTags("<span><i>Hello</i> <b>world</b>!</span>", ["i", "span"]) // <span><i>Hello</i> world!</span>`

<a name="reverseCharacters" href="#reverseCharacters">#</a> strings.<b>reverseCharacters</b>(<i>string</i>)

Reverses the order of a string's characters.

<a name="reverseWords" href="#reverseWords">#</a> strings.<b>reverseWords</b>(<i>string</i>)

Reverses the order of a string's words.

<a name="shuffleCharacters" href="#shuffleCharacters">#</a> strings.<b>shuffleCharacters</b>(<i>string</i>)

Randomly shuffles a string's characters. Uses the [Fischer-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

<a name="shuffleWords" href="#shuffleWords">#</a> strings.<b>shuffleWords</b>(<i>string</i>)

Randomly shuffles a string's words. Uses the [Fischer-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).
