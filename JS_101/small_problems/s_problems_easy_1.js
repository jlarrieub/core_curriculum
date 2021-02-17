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
