// /*----------------------------Question1-------------------------*/
// // Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newString = advice.replace('important', 'urgent');

// /*----------------------------Question2-------------------------*/
// //The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

// let numbers1 = [1, 2, 3, 4, 5];
// let newNumbers = numbers1.slice().reverse();
// console.log(numbers1);
// console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]
// //spread syntax
// let numbers2 = [1, 2, 3, 4, 5];
// let newNumbers2 = [...numbers2].sort((num1, num2) => num2 - num1);
// console.log(numbers2); // [ 5, 4, 3, 2, 1 ]

// // /*----------------------------Question 3-------------------------*/
// // Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// /*----------------------------Question 4-------------------------*/
// //Starting with the string:
// // show two different ways to put the expected "Four score and " in front of it.
// let famousWords = "seven years ago...";
// let beggining = "Four score and "
// let firstfamousWords = beggining + famousWords;
// let secondfamousWords = beggining.concat(famousWords);

// /*----------------------------Question 5-------------------------*/
// // Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5]
// let arrNum = [1, 2, 3, 4, 5]
// arrNum.splice(2, 1)
// console.log(arrNum)

/*----------------------------Question 6-------------------------*/
// // Suppose we build an array like this:
// // Create a new array that contains all of the above values, but in an un-nested format:
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// // console.log(flintstones.flat())
// // console.log([].concat(...flintstones))
// // let newFlinstones = flintstones.reduce((accum, name) => {
// //   return accum.concat(name);
// // }, [])
// // console.log(newFlinstones)
// let newFlinstones = [];
// flintstones.forEach(element => {
//   newFlinstones = newFlinstones.concat(element);
// })
// console.log(newFlinstones)

/*----------------------------Question 7-------------------------*/
// //Consider the following object:
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let array = Object.entries(flintstones);
// let newArray = array[2];
// console.log(newArray)
// let otherArray = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();

/*----------------------------Question 8-------------------------*/
// // How would you check whether the objects assigned to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers))
// console.log(Array.isArray(table))

/*----------------------------Question 9-------------------------*/
// // Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

// let title = "Flintstone Family Members";
// let table = Math.floor((40 - title.length) / 2);
// console.log(title.padStart(table + title.length))

/*----------------------------Question 10-------------------------*/
// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
statement1.split('').filter(char => char === 't').length;
