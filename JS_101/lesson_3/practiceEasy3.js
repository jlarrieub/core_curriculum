// /*
// 1.Write three different ways to remove all of the elements from the following array:
// */
// let numbers = [1, 2, 3, 4];
// numbers.length = 0;

// while (numbers.length) {
//   numbers.pop();
// }

// numbers.slice(0, numbers.length);

// /*
// 2. What will the following code output?
// */
// console.log([1, 2, 3] + [4, 5]);
// // 1, 2, 34 5 (two arrays get coerced into a string)

/*
3. What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

// 'hello there' variables as pointers, str1 is still referrencing the same value hello there while str2 when it assigned to str1 just made a copy of the value, it wasnt the same value
*/

/*
4. What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

* It outputs first: 42.
* The slice() method only creates a shallow copy, so arr1 and arr2 are still pointing at the same 'second level' object, so when it gets modified in arr2,
it gets modified in arr1
*/

/*
5. The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}


// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// let isColorValid = (color) => color === 'blue' || color === 'green';

const isColorValid = color => ["blue", "green"].includes(color);

console.log(isColorValid('blue'))
*/
