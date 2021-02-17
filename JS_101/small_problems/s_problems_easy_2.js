
// // 1. Welcome Stranger
// // Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// function greetings(array, object) {
//   let arrayToString = array.join(' ')
//   let objectKeys = Object.values(object)
//   let work = objectKeys.join(' ')
//   return `Hello, ${arrayToString}! Nice to have a ${work} around.`;
// }
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// // //A BETTER WAY OF DOING IT:
// // function greetings(name, status) {
// //   return `Hello ${name.join(' ')}! Nice to have a ${status.title} ${status.occupation} around.`
// // }

// // 2.Greeting a user
// // Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// let rlSync = require(`readline-sync`);
// let usersName = rlSync.question(`What is your name?\n`);

//   if (usersName.includes('!')) {
//     console.log(`HELLO ${usersName.toUpperCase()}. WHY ARE YOU SCREAMING?`)
//   } else {
//     console.log(`Hello ${usersName}.`)
//   }

// // // 3. Create a function that takes two arguments, multiplies them together, and returns the result.
// function multiply(num1, num2) {
//   return num1 * num2;
// }  
// // console.log(multiply(7, 2) === 14); // logs true

// // 4. Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
// function multiply(num1, num2) {
//   return num1 * num2;
// }  
// function square(number) {
//   return multiply(number, number)
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// // 5. Arithmetic Integer
// // Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// let rlSync = require(`readline-sync`);
// let firstNumber = parseFloat(rlSync.question(`Enter the first number:\n`));
// let secondNumber = parseFloat(rlSync.question(`Enter the second number:\n`));

// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

// // 6.The End Is Near But Not Here
// // Write a function that returns the next to last word in the String passed to it as an argument.
// // Words are any sequence of non-blank characters.
// // You may assume that the input String will always contain at least two words.

// function penultimate(string) {
//   let stringSplit = string.split(' ').slice(-2, -1);
//   let penultimateString = stringSplit.toString();
//   return penultimateString;
// }

// console.log(penultimate("las word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// // 7. Exclusive Or
// // The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.
// // In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// function xor(arg1, arg2) {
//   if (!arg1 || arg2) {
//     return true;
//   } else if (arg1 || !arg2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// // 8.Odd Lists
// // Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
// //pass list of arrays, how to do that, map or loop
// //jump every second element
// //return array
// function oddities(array) {
//   let oddArray = [];
//   for (let i = 0; i < array.length; i += 2) {
//     oddArray.push(array[i]);
//   }
//   return oddArray;
// }
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

/*------------------------COULDNT DO NUMBER 9 ---------------------*/
// // 9.Convert a String to a Number!
// // The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.
// // Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.
// // For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
// // You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// //create a function 
// //cannot use parseIInt or Number method
// //turn the string into separate values as an array
// function stringToInteger(string) {

// }
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/*-----------------------COULDNT DO NUMBER 10 OR 11----------------*/
