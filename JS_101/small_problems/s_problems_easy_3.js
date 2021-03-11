// /*
// 1. Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Problem:
//   Input: String with duplicates
//   Output: String without duplicates

// Data Structure:
// String
// Array

// Algorithm:
// 1. Create function crunch with one parameter a string
// 2. Divide the string into characters
// 3. Loop every character
//   1. If the currentCharacter = nextCharacter, continue
//   2. Else, return character
// 4. Join characters into string;
// */

// function crunch(string) {
//   let stringOfChar = string.split('')
//   let newArray = [];
//   for (let i = 0; i < stringOfChar.length; i += 1) {
//     if (stringOfChar[i] === stringOfChar[i + 1]) {
//       continue;
//     } else {
//       newArray.push(stringOfChar[i]);
//     }
//   }
//   return newArray.join('')
// }
// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('ggggggggggggggg'));            // "g"

/*
2. Write a function that will take a short line of text, and write it to the console log within a box.
*/

let numbers = [1, 2, 3, 4];
for (i = 0; 0 < numbers.length; i++) {
  numbers.shift()
  console.log(numbers);
  
}

