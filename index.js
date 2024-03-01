// EXAMPLE 1 - Get the substring after a specific Character in JavaScript

const str = 'abc bobby_hadz.com';

const after_ = str.slice(str.indexOf('_') + 1);

console.log(after_); // 👉️ "hadz.com"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function afterCharacter(string, char) {
//   return string.slice(str.indexOf(char) + 1);
// }

// const str = 'abc bobby_hadz.com';

// // 👇️ hadz.com
// console.log(afterCharacter(str, '_'));

// // 👇️ bobby_hadz.com
// console.log(afterCharacter(str, ' '));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the substring after a specific Character using String.split()

// const str = 'abc bobby_hadz.com';

// const after_ = str.split('_')[1];

// console.log(after_); // 👉️ hadz.com

// ------------------------------------------------------------------

// // EXAMPLE 4 - Handling the scenario where the character is not in the string

// const str = 'abc bobby_hadz.com';

// // 👇️ [ 'abc bobby_hadz.com' ]
// console.log(str.split('@'));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function that uses split()

// function afterCharacter(string, char) {
//   return string.split(char)[1] || string;
// }

// const str = 'abc bobby_hadz.com';

// // 👇️ hadz.com
// console.log(afterCharacter(str, '_'));

// // 👇️ bobby_hadz.com
// console.log(afterCharacter(str, ' '));

// // 👇️ abc bobby_hadz.com
// console.log(afterCharacter(str, '#'));

// ------------------------------------------------------------------

// // EXAMPLE 6 - Don't use split() if your string contains multiple occurrences of char

// const str = 'A very_long_string';

// // 👇️ [ 'A very', 'long', 'string' ]
// console.log(str.split('_'));

// const after_ = str.split('_').pop();

// console.log(after_); // 👉️ string
