// // // 1.Isn't it Odd?
// // Write a function that takes one integer argument, which may be positive, negative, or zero.This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
// function isOdd(integer) {
//   if (Math.abs(integer) % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // //simpler solution:
// // function isOdd(number) {
// //   return Math.abs(number) % 2 === 1;
// // }
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// // 2.Odd Numbers: Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// for (i = 1; i <= 99; i += 2) {
//   console.log(i);
// }

// // 3.Even Numbers
// // Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// for (i = 1; i < 100; i += 1){
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // // 4. How big is the room?
// // Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// // Note: 1 square meter == 10.7639 square feet

// // Do not worry about validating the input at this time.Use the readlineSync.prompt method to collect user input.
// let readlineSync = require(`readline-sync`);

//   let length = readlineSync.question(`Enter the length of the room in meters:\n`);
//   let width = readlineSync.question(`Enter the width of the room in meters:\n`);
// let areaMeters = length * width;
// let areaFeet = areaMeters * 10.7639

// console.log(`The area of the room is (${areaMeters.toFixed(2)}) square meters (${areaFeet.toFixed(2)} square feet)`);

// // 5. Tip Calculator. Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.
// let rlSync = require(`readline-sync`);
// let bill = parseFloat(rlSync.question(`What is the bill?\n`));
// let tipPercentage = parseFloat(rlSync.question(`What is the tip percentage?\n`));

// let tip = bill * (tipPercentage / 100);
// let total = tip + bill;
// console.log(`The tip is $${tip.toFixed(2)}`)
// console.log(`The total is $${total.toFixed(2)}`)

// // 6. Sum or Product of Consecutive Integers
// // Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// let rlSync = require(`readline-sync`);
// let greaterInteger = Number(rlSync.question(`Please enter an integer greater than 0:\n`));
// let sumOrProduct = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product.`)

// function integerSum(greaterInteger, sumOrProduct) {
//   let addNumber = 0;
//   let multiplyNumber = 1;

//   if (sumOrProduct === "s") {
//     for (i = 0; i <= greaterInteger; i += 1) {
//       addNumber = addNumber + i;
//     } console.log(addNumber);
//   } else if (sumOrProduct === "p") {
//     for (i = 1; i <= greaterInteger; i += 1) {
//       multiplyNumber = multiplyNumber * i;
//     }console.log(multiplyNumber);
//   }
// }
// integerSum(greaterInteger, sumOrProduct);

// // 7.Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// function shortLongShort(string1, string2) {
//   if (string1.length >= string2.length) {
//     console.log(string2 + string1 + string2);
//   } else {
//     console.log(string1 + string2 + string1);
//   }
// }
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// // 8.Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

// /*leap year:
// leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100.
// /*
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// 9. Leap Years (Part 2)
// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// // 10. Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// // 11.ASCII String Value
// // Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

// function asciiValue(string) {
//   let stringSplit = string.split('');
//   let charCodeNumber = stringSplit.map(key => key.charCodeAt());
//   let result = charCodeNumber.reduce((accumulator, value) => accumulator + value, 0);
//   console.log(result)
// }
// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');       

// //separate the string into values as
// //find the number of each of the values
// //add the values
// //return value


/*--------------------------SECOND TRY----------------------------*/
// /*1. Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// Problem: 
// Input: Integer, positive, negative or zero

// Output: True if odd, false if even

// Examples:
// 2 /2 = 1 //even, return false
// 3/2 = 1.5//odd, return false
// 0/2 = 0//0, return false

// Data Structure:
// Input, Integer can be positive, negative or zero
// Output: true or false
// > Integer
// > Boolean

// Algorithm:
// - Create function that accepts integer positive, negative or zero as argument
// -If integer is divisible by 2 with a remainder of 1
//   -return true
// -Else
//   -return false
// */

// function isOdd(num) {
//   return num % 2 === 1 || num % 2 === -1;
// }
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// /*
// 2.Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Problem:
// input: number 1
//       incremental of 2

// output: 1 /3/5 etc till 99

// Requirement:
//   Has to be from 1 to 99, 99 has to be included
//   Cannot handle negative numbers
//   Has to print each number in separate lines
// Examples:

// Data Structure
// > numbers
// > numbers

// Algorithm:
// 1. SET number to 1
// 2. WHILE number is less than or equal to 99
//   1.log every number
//   2.increment number by 2
// */
// for (let number = 1; number <= 99; number += 2) {
//   console.log(number);
// }

// /*
// 3.Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Problem:
// Input: number 0;
// Output: All even numbers to 99

// Requirements
// Have to be even numbers
// Have to print every number
// 99 cannot be included since 98 is last even number

// Data Structure
// > Positive Integer
// > Positive Integer

// Algorithm:
// 1. Set number to 0
// 2. While number is less than 99
//   1. log number
//   2. increment number by two
// */
// for (let number = 1; number < 99; number += 1) {
//   if (number % 2 === 1) {
//     continue;
//   }
//   console.log(number);
// }

// /* 4. Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Problem:
// Input: Number 1 (meters)
//       Number 2 (meters)
// Output: Numbers in: square meters and square feet

// Requirements:
// * Has to be positive number
// * What if the number is 0 or negative, cant be

// Data Structure:
// > Numbers

// Algorithm:
// A. Require readline sync
// 1. Ask user for length number
// 2. Record length number
//   1. If not a number, ask for valid positive number
// 3. Ask user for width number
// 4. Record width number
//   1. If not a number, ask for valide positive number
// 5.SET areaMeters to length number * width number
// 6. SET areaFeet to areaMeters * 10.7639
// 7.Console log results
// */

// let rlSync = require(`readline-sync`);

// console.log(`Enter the length of the room in meters:`)
// let length = rlSync.question();

// while (length <= 0 || (isNaN(length))) {
//   console.log(`Please enter a valid positive number:`)
//   length = rlSync.question();
// }

// console.log(`Enter the width of the room in meters:`)
// let width = rlSync.question();

// while (width <= 0 || (isNaN(length))) {
//   console.log(`Please enter a valid positive number:`)
//   width = rlSync.question();
// }

// const areaMeters = Number(length) * Number(width);
// const areaFeet = areaMeters * 10.7639;

// console.log(`Would you like the area of the room in meters or feet:`)
// let answer = rlSync.question();

// while (answer !== 'meters' && answer !== 'feet') {
//   console.log(`Please enter feet or meters:`)
//   answer = rlSync.question();
// }

// if (answer === 'meters') {
//   console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).
// `);
// } else if (answer === 'feet') {
//   console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(2)} square meters).
// `);
// }

// /* 5. Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// Problem:
// Input: bill amount
//       tip rate

// Output: tip amount
//         total plus tip amount

// Data Structure:
// > readline-sync
// > Positive number
// > Intermidiary Data Structure:
//   > Positive numbers

// Algorithm:
// 1. SET rlSync to require readline sync
// 2. Ask user for the bill
// 3. Ask user for the tip percentage
// 4. SET tip to bill * tip percentage / 100
// 5. SET total to bill + tip
// 6. Log tip
// 7. Log total
// */
// let rlSync = require(`readline-sync`);

// console.log(`What is the bill:`);
// let bill = rlSync.question();
// bill = parseFloat(bill);

// console.log(`What is the tip percentage:`);
// let tipPercentage = rlSync.question();
// tipPercentage = parseFloat(tipPercentage);

// const TIP_AMOUNT = bill * (tipPercentage / 100)
// const TOTAL_BILL = bill + TIP_AMOUNT;

// console.log(`The tip is $${TIP_AMOUNT.toFixed(2)}`);
// console.log(`The total is $${TOTAL_BILL.toFixed(2)}`);

// /* 
// 6. Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Problem:
// Input: integer greater than 0
// Output: Sum or Product of integers between 1 and input integer

// Examples:
// Example 1:
//   Input: 3
//   Input: s for sum
//   Output: 5

// Example 2:
//   Input: 4
//   Input: p for product
//   Output: 24

// Data Structures:
// > Numbers
// > Strings

// Algorithm:
// 1. SET rlSync to require readline sync
// 2. Ask for a positive number greater than 0
//   2. create array using positive integers
//   1.Let integer = this positive number
// 3. Ask if computation is sum or product
// 4. If SUM 
//   1.Initialize sum to (0) and counter to (0)
//   2. While counter is less than or equal to number:
//   3. Sum += counter
//   3. Add 1 to counter;
//   4. Return the sum
// 5. If PRODUCT
//   1.Initialize product to (1) and counter to 1
//   2. While counter is less than or equal to number;
//   3. Product += counter
//   4. Add 1 to counter
//   5. return product
//   */
// let rlSync = require(`readline-sync`);

// console.log(`Please enter an integer greater than 0:`);
// let integer = parseInt(rlSync.question());

// function arrayOfIntegers(integer) {
//   let newArray = [];
//   for (let i = 1; i <= integer; i += 1) {
//     newArray.push(i)
//   }
//   return newArray;
// }

// let integersArray = arrayOfIntegers(integer);

// console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
// let computation = rlSync.question();

// function sumOfIntegers(integersArray) {
//   return integersArray.reduce((total, number) => total + number, 0)
// }

// function productOfIntegers(integersArray) {
//   return integersArray.reduce((total, number) => total * number, 1);
// }

// if (computation === 's') {
//   console.log(`The sum of the integers between 1 and ${integer} is ${sumOfIntegers(integersArray)}.`);
// } else if (computation === 'p') {
//   console.log(`The product of the integers between 1 and ${integer} is ${productOfIntegers(integersArray)}.`);
// }

// /*
// 7.Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// Problem:
// Input: Two strings
// Output: Return concatenation of shorter, longer, shorter

// Requirements:
// Compare the two strings
// Has to have two strings

// Examples
// shortLongShort('abc', 'defgh');    // "abcdefghabc" //abc short
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh" //fgh short
// shortLongShort('', 'xyz');         // "xyz"

// Data Structures:
// > Strings

// Algorithm:
// 1. Create an if else statement, comparing string1 length to string2 length
//   1.If string1 is shorter than string2, 
//     1. return concatenate string1, string2, string1
//   2. If else string1 is larger than string2
//     1.Return concatenation of string2, string1, string2
// */

// function shortLongShort(string1, string2) {
//   if (string1.length < string2.length) {
//     return string1 + string2 + string1;
//   } 
//   if (string1.length > string2.length) {
//     return string2 + string1 + string2;
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc" 
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh" 
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// /*
// 8. In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

// Problem:
// Input: Year in number
// Output: Boolean

// Rules: 
// If year is evenly divisible by 4 && is not evenly divisible by 100// true
// If the year is evenly divisible by 100 && evenly divisible by 400

// Examples:
// 2016 / 4 yes
//     / 100 no //true
// 2000 / 4 yes
//     / 100 yes
//     / 400 yes //true
// 1752 / 4 true
//     / 100 no //true

// Algorithm:
// 1. If Year is divisible by 4 && not divisible by 100
//   1. Return true
// 2. If else year is divisible by 100 && divisible by 400
//   1. Return true
// 3. Else
//   1. Return false
// */

// function isLeapYear(year) {
//   if (((year % 4 === 0) && (year % 100 !== 0))
//   || ((year % 400 === 0))) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false

// /*
// 9. The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
// */
// function isLeapYear(year) {
//   if (year <= 1752 && year % 4 === 0) {
//     console.log(true);
//   } else if (((year % 4 === 0) && (year % 100 !== 0))
//       || ((year % 400 === 0))) {
//       console.log(true);
//   }  else {
//     console.log(false)
//   }
// }
 
/* 
// 10. Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Problem:
// Input: Target number
// Output: Sum of multiples up to target number
// Rule:
//   If a number is a multiple of 3 and 5, it cant repeat itself

// Data Structure:
// > Number
// > Arrays

// Algorithm:
// 1. Set number to target number
// 2. create function takes number and divisor as arguments
//   1. return true if number % divisor === 0;
// 3. create function multisum takes targetNumber as argument
//   1. set sum to 0
//   2. Create for loop 
//     1. set count to 1
//     1. While count is less than target number
//     1. If function (number, 3) or function(number, 5) are true;
//       2. sum += number
//   4. Return sum;
// */

// function isDivible(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(targetNumber) {
//   let sum = 0;
  
//   for (let count = 1; count <= targetNumber; count += 1) {
//     if (isDivible(count, 3) || isDivible(count, 5)) {
//       sum += count;
//     }
//   }

//   return sum;
// }
// console.log(multisum(1000))

// /*
// 11. Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)
// */

// function asciiValue(sentence) {
//   let sum = 0
//   for (let index = 0; index < sentence.length; index += 1) {
//     sum += sentence.charCodeAt(index)
//   }
//   console.log(sum)
// }
// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0
