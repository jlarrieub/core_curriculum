/*------------------------PSEUDOCODE PRACTICE------------------------*/


/*------------------------EXERCISE 1------------------------*/
// - a function that returns the sum of two numbers

//PSEUDOCODE:
//write a function that takes two numbers as parameters
//create a variable inside of the function and add the two parameters
//return the value of the addition to the callback function

/*FORMAL PSEUDOCODE
START
GET number1 = value
GET number2 = value
  SET addition = number1 + number2
  PRINT addition
END
*/
// function sumOfTwo(number1, number2) {
//   let addition = number1 + number2;
//   return addition;
// }
// console.log(sumOfTwo(2, 4));

/*------------------------EXERCISE 2------------------------*/
// - a function that takes an array of strings, and returns a string that is all those strings concatenated together

/*PSEUDOCODE:
-create a function that takes as an argument an array of strings
-convert the array of strings into one single string
-return the concatenated string together
*/

/*FORMAL PSEUDOCODE:
START
#Given an array of 1 or more strings

GET array of strings
PASS method on array that concatenates each string to each other
*/

// let arrayOfStrings = ['a', 'b', 'c', 'd'];
// function toString(arr) {
//   return arr.join('')
// }
// console.log(toString(arrayOfStrings))

// /*------------------------EXERCISE 3------------------------*/
// // - a function that takes an array of integers, and returns a new array with every other element

// /*PSEUDOCODE:
// create array of integers
// make function, uses one parameter, array
// inside function:
// create a new empty array
// while the integer is in index 0, 2, 4 etc, push into new array
// return new array
// */

// let integers = [1, 2, 3, 4, 5, 6];

// function everyOther(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i += 2) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(everyOther(integers));

/*---------------------FLOW CHART---------------------*/
/*
while the user wants to keep going
  - ask the user for a collection of numbers
  - iterate through the collection one by one.
    - save the first value as the starting value.
    - for each iteration, compare the saved value with the current value.
    - if the saved value is greater than or equal to the current number
      - move to the next value in the collection
    - otherwise, if the current value is greater than the saved value
      - reassign the saved value as the current value

  - after iterating through the collection, save the largest value into the list.
  - ask the user if they want to input another collection

return the saved list of numbers
*/
