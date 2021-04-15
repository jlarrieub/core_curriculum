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

// /*
// 2. Write a function that will take a short line of text, and write it to the console log within a box.
// */

// function logInBox(str) {
//   let i = str.length;
//   let horizontalRule = `+${"-".repeat(i + 2)}+`;
//   let emptySpace = `|${" ".repeat(i + 2)}|`;

//   console.log(horizontalRule);
//   console.log(emptySpace);
//   console.log(`| ${str} |`);
//   console.log(emptySpace);
//   console.log(horizontalRule);
// }
// logInBox("Hello Anja");

// /* 3. Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
//  */

// function stringy(number) {
//   let string = "";
//   for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//       string += "1";
//     } else {
//       string += "0";
//     }
//   }
//   console.log(string);
// }
// stringy(9); // "101010101"
// stringy(4); // "1010"
// stringy(7); // "1010101"

// /*--------------------------COULDNT DO 4, TRY FIBONACCI-------------------------------*/

// /*
// 5. Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
// */

// function triangle(number) {
//   let space = " ";
//   let asterix = "*";
//   let f = 0;

//   for (let i = number; 0 < i; i -= 1) {
//     console.log(`${space.repeat(i - 1)} ${asterix.repeat(f + 1)}`);
//     f += 1;
//   }
// }

// triangle(10);

// /*
// 6. Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.
// */

// let rlSync = require("readline-sync");

// let noun = rlSync.question(`Enter a noun:\n`);
// let verb = rlSync.question(`Enter a verb:\n`);
// let adjective = rlSync.question(`Enter an adjective:\n`);
// let adverb = rlSync.question(`Enter an adverb:\n`);

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
// The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
// The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);

// /*
// 7. A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

// */

// function twice(number) {
//   let arr = number.toString();

//   let center = Math.floor(arr.length / 2);
//   let left = arr.slice(0, center);
//   let right = arr.slice(center, arr.length);

//   if (left === right) {
//     console.log(number);
//   } else if (left !== right) {
//     console.log(number * 2);
//   }
// }

// twice(37); // 74

/*
// 8. Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'


// */
// function getGrade(grade1, grade2, grade3) {
//   let averageGrade = (grade1 + grade2 + grade3) / 3;
//   if (0 <= averageGrade && averageGrade < 60) {
//     console.log("F");
//   } else if (60 <= averageGrade && averageGrade < 70) {
//     console.log("D");
//   } else if (70 <= averageGrade && averageGrade < 80) {
//     console.log("C");
//   } else if (80 <= averageGrade && averageGrade < 90) {
//     console.log("B");
//   } else if (90 <= averageGrade && averageGrade <= 100) {
//     console.log("A");
//   } else {
//     console.log("Not here");
//   }
// }

// getGrade(95, 90, 93); // "A"
// getGrade(50, 50, 90); // "D"

/*
9. 
*/

function century(number) {
  let turnCentury = number.toString().split("");

  if (turnCentury.length <= 1) {
    console.log("1st");
  } else if (turnCentury.length <= 3) {
    turnCentury.splice(1, 0, ".").join("");
    let thisCentury = Number(Math.ceil(turnCentury.join("")));
    console.log(thisCentury);
  }
}

century(2001);

century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
