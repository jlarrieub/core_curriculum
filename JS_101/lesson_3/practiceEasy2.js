// /*
// Question 1
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
// */
// let advice = "Few things in life are as important as house training your pet dinosaur.";

// function replaceWords(string) {
//   let arrayString = string.split(' ');
//   let newArray = [];
//   for (let index = 0; index < arrayString.length; index += 1) {
//     if (arrayString[index] === 'important') {
//       newArray = arrayString.splice(0, [index]);
//     }
//   }
//   return newArray.join(' ');
// }
// console.log(replaceWords(advice));

// /*
// 2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
// */
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = [...numbers].reverse()
// let newNumbers2 = numbers.slice().sort((a, b) => b - a)
// let newNumbers3 = Array.from(numbers).reverse();
// console.log(newNumbers3)
// console.log(newNumbers)
// console.log(newNumbers2)
// console.log(numbers);

// let reversedArray = [];
// // i want to start from the last element
// let i = 1;
// numbers.forEach((_) => {
//   reversedArray.push(numbers[numbers.length - i])
//   i++;
// })
// console.log(reversedArray)

// numbers.forEach((element) => {
//   reversedArray.unshift(element);
// })


// /*
// 3. Given a number and an array, determine whether the number is included in the array.
// */

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));

// let trueNumbers = numbers.some((element) => {
//   return element === number2
// });

// console.log(trueNumbers)

// /* 
// 4. Starting with the string:
// show two different ways to put the expected "Four score and " in front of it.
// */
// let famousWords = "seven years ago...";
// 'Four score and ' + famousWords;
// `Four score and ${famousWords}`;
// 'Four score and '.concat(famousWords);

// /* 
// 5. Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// Problem:
//  Input: Array of Numbers
//  Output: Array of Numbers minus number in middle
//  Rules: Has to be the same array, mutate it.

// Algorithm:
// Find method that can cut middle of array and mutate
// */
// let num = [1, 2, 3, 4, 5];
// num.splice(num.indexOf(3), 1)

// console.log(num);

// /*
// 6. Create a new array that contains all of the above values, but in an un-nested format:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
// */

// /*
// Consider the following object:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

// [ 'Barney', 2 ]
// */

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let objFlint = Object.entries(flintstones)
//   .filter(element => element[0] === 'Barney').pop()

/*
8.How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
*/

// Array.isArray(numbers) // true
// Array.isArrray(table) // false

// /*
// 9. Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

// Problem: 
// Input: String
// Output: String that has been centered
// */

// let title = "Flintstone Family Members";
// let divisor = Math.floor((40 - title.length) / 2);
// let centeredTitle = title.padStart(divisor + title.length);
// console.log(centeredTitle);

// /*
// Question 10
// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:
// */
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// statement1.match(/[t]/g).length //this works because it counts the length of the array
// let arr = statement2.split('').filter(element => element === 't').length
