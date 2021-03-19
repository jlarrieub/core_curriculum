/*
1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
Problem:
Input: String
Output: String with larger indentation each time

Data Structure:
String
Loop
String method padStart
  
let emptyString = ' '
for (let i = 0; i < 10; i += 1) {
  console.log(`${emptyString.repeat(i)}The Flintstones Rock!`)
}
 */
/*
2. Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`


let munstersDescription = "The Munsters are creepy and spooky.";
let newMunsters = munstersDescription.split('');
let invertedMunsters = [];
newMunsters.forEach(element => {
  if (element === element.toUpperCase()) {
    invertedMunsters.push(element.toLowerCase());
  } else {
    invertedMunsters.push(element.toUpperCase());
  }
})
console.log(invertedMunsters.join(''))
*/
// /*
// 3.
// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }
// Bonus: What is the purpose of number % divisor === 0 in that code?
// */
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } 
//   return factors
// }
// console.log(factors(-10))
// //Bonus: A conditional to check if the result is 0, if the result is 0,
// // then its an integer so the number divided by the divisor is a factor




