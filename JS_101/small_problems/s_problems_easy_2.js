// /*
// 1. Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// Problem:
// Input: Array with 2 or more elements
//       Object with 2 keys and values
// Output:
//   String with Array as String and Object values as string

// Example:
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Data Structures
// > Arrays
// > Objects
// > Strings

// Algorithm:
// 1. Create function with Array and Object as parameters
// 2. Transform Array into arrayString
// 3. Transform Object properties into objectString
// 4. Return string including arrayString and objectString concatenated
// */

// function greetings(arr, obj) {
//   let arrayString = arr.join(' ');
//   let objectString = `${obj['title']} ${obj['occupation']}`
//   return `Hello, ${arrayString}! Nice to have a ${objectString} around.`
// }
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// /*
// 2.Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// Problem:
// Input: Users Name
// Output: Users Name
//         or Users Name in ALLCAPS
// Rules:
//   If username doesnt use ! mark , return as normal
//   If username returns with !makr, Allcaps name

// Examples:
// Eg. 1
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE YOU SCREAMING

// Data Structure:
// > Strings
// > Strings

// Algorithm:
// 1. Use readline to receive username
// 2. LET name be username
// 3. If username includes !
//   1. log NAME, WHY ARE YOU SCREAMING
// 4. else
//   2. log Hello, name
// */
// let rlSync = require(`readline-sync`);

// console.log(`What is your name?`);
// let name = rlSync.question();

// if (name.includes('!')) {
//   name = name.slice(0, -1)
//   console.log(`HELLO ${name.toUpperCase()}, WHY ARE YOU SCREAMING?`)
// } else {
//   console.log(`Hello ${name}.`)
// }

// /*
// 3. Create a function that takes two arguments, multiplies them together, and returns the result.

// Problem:
//   Input: Number 1
//           Number 2
//   Output: Multiplication of Num1 and Num2

// Example:
// console.log(multiply(5, 3) === 15); // logs true

// Algorithm:
// 1. SET function multiply with two arguments, Num1 and Num2
// 2. Return multiplication operation of num1 and num2
// */
// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(5, 3) === 15); // logs true

/*
4. Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Problem:
  Input: Number
  Output: Square root of Number
  Rules:
  You have to use the multiply function to pass it into another function

  Examples: 
  console.log(square(5) === 25); // logs true
  console.log(square(-8) === 64); // logs true

  Algorithm:
  1. SET function square to take one argument, num
  2. Pass the function multiply and put num as argument
  3. Return result of argument:
*/

// let multiply = (num1, num2) => num1 * num2;

// let square = (num) => multiply(num, num);

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// /*
// Further Exploration
// What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?
// */
// let powerOf = (num, power) => {
//   return multiply(num, num) * (num * (power - 2))

// }
// console.log(powerOf(3, 3) === 27); // logs true

// /*
// 5. Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// Problem:
//   Input: First Number
//         Second Number
//   Output: Operation of two numbers (+,-,*,/,%,**)

// Example:
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// Algorithm:
// 1. Require readline sync
// 2. Ask for first Number
//   1. SET number1 to first number
//   2. If string, convert to number
// 3. Ask for second Number
//   1. SET number2 to second number
//   2. If string, convert to number
// 4. Console log all of the operations
// */
// let rlSync = require(`readline-sync`);

// function prompt(message) {
//   console.log(`===> ${message}`);
// }

// prompt('Enter the first number:');
// let num1 = Number(rlSync.question());

// prompt('Enter the second number:');
// let num2 = Number(rlSync.question());

// prompt(`${num1} + ${num2} = ${num1 + num2}`);
// prompt(`${num1} - ${num2} = ${num1 - num2}`);
// prompt(`${num1} * ${num2} = ${num1 * num2}`);
// prompt(`${num1} / ${num2} = ${num1 / num2}`);
// prompt(`${num1} % ${num2} = ${num1 % num2}`);
// prompt(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);

// /*
// 6.Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Problem:
//   Input: String
//   Output: Penultimate word
//   Rules: always has two words

// Examples:
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Data Structure:
// > Strings
// > Arrays
// > Strings

// Algorithm:
// 1. Create an array made up of words
// 2. Select the second to last word from the array as a newword
// 3. Transform that array element into a string
// 4. Return the string
// */

// function penultimate(string) {
//   let array = string.split(' ').splice(-2, 1).join(' ');
//   return array;

// }
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
// 7. The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// Problem:
// Input: Argument 1
//         Argument 2
// Output: True or False;
// Rules: 
//       XOR one value is truthy, true
//           two values are truthy, false
//           two values are falsy, false

// Examples:
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// Data Structure:
// > Primitive values

// Algorithm:
// 1. 
// */
// function xor(arg1, arg2) {
//   if ((!arg1 && arg2) || (!arg2 && arg1)) {
//     return true;
//   }

//   return false;
// }
// console.log(xor(5, 0) === true); // true
// console.log(xor(false, true) === true); //true
// console.log(xor(1, 1) === false); //true
// console.log(xor(true, true) === false); //true

// /*
// 8. Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Problem:
// Input: Array
// Output: Odd elements of Array
// Rules: The first element of array starts in 1

// Data Structures:
// > Arrays

// Algorithm:
// 1. Function that takes array as argument
// 2. Create an empty Array called OddArray
// 2. WHILE element of array is less than array.length
//   1. If index is divisible % 2 === 0
//   2. Push into oddArray
// 3. Return oddArray
// */

// function oddities(array) {
//   let oddArray = [];
//   for (let i = 0; i < array.length; i += 2) {
//     oddArray.push(array[i]);
//   }
//   return oddArray;
// }

// // FURTHER EXPLORATION
// function oddities(array) {
//   let oddArray = [];
//   return array.filter((element, index) => {
//     if (index % 2 === 1) {
//       return oddArray.push(element)
//     }
//   })
// }
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]

/*
// 9. The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

// Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.
// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.
*/

function stringToInteger(string) {
  let stringToNumObj = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
  };
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
