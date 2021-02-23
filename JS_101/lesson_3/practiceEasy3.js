/*----------------------------Question 1-----------2 out of 3----*/
// //Write three different ways to remove all of the elements from the following array:
// let numbers = [1, 2, 3, 4];
// // // numbers.length = 0;
// // // numbers.splice(0, 4)
// while (numbers.length) {
//   numbers.shift();
// }
// console.log(numbers);

/*----------------------------Question 2-------------wrong------*/
// What will the following code output?
//IT CONVERTS THE ARRAY INTO STRINGS
// console.log([1, 2, 3] + [4, 5]);
//[1,2,3,4,5] wrong, 1,2,34,5

/*----------------------------Question 3-------------right--------*/
// // What will the following code output?
// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1)//hello there

/*----------------------------Question 4-------------WRONG REVISE---*/
// What will the following code output?

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();//removes all elements of array
// arr2[0].first = 42;//[{first:42}]
// console.log(arr1);

/*----------------------------Question 5-------------HALF WRONG---*/
function isColorValid(color) {
  return color === "blue" || color === "green";
}
let isThisValid = color => color === 'blue' || color === "green";
console.log(isColorValid('blue'))
console.log(isThisValid('green'))
