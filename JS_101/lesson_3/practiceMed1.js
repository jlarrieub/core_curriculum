/*----------------------------Question 1-------WRONG-----*/
// let str1 = 'The Flinstones Rock!';
// let indent = " ";
// let newString;
// for (let i = 0; i < 10; i += 1) {
//  console.log(indent.repeat(i) + str1)
// }

/*----------------------------Question 2-------RIGHT-----*/

// Starting with the string: Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

//divide string into array
//loop array and for every upper case, turn lower case
//to every lower case, upper case
// let munstersDescription = "The Munsters are creepy and spooky.";
// function swapLetters(string) {
//   let newString = string.split('')
//   let newNew = newString.map(char => {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   });
//   return newNew.join('');
// }
// console.log(swapLetters(munstersDescription))

/*----------------------------Question 3-------RIGHT-----*/
// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code?

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
console.log(factors(0))
