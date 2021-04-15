/* eslint-disable no-restricted-syntax */
// Manually incrementing an array by 1
const numbers = [1, 2, 3, 4];
numbers[0] += 1;
numbers[1] += 1;
numbers[2] += 1;
numbers[3] += 1;
console.log(numbers);

// Resolving with while loop
const num = [1, 2, 3, 4, 6];
let index = 0;

while (index < num.length) {
  num[index] += 1;
  index += 1;
}

console.log(num);

// Generic Loops

// while (true) {
//   // some code here
// }

/*
* An infinite loop

while (true) {
  console.log('Hello!');
}
*/

// To stop an infinite loop

while (true) {
  console.log('Hello!');
  break;
}

// Creating a while loop with random number, break at number 5

while (true) {
  const randomNum = Math.floor((Math.random() * 10) + 1);
  console.log(randomNum);

  if (randomNum === 5) {
    console.log("Exiting!");
    break;
  }
}

/* -------------------------------ITERATING OVER COLLECTIONS-----------------*/

// STRINGS

// as a while loop
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter].toUpperCase());
  counter += 1;
}

// more succinct as a for loop
for (let counter = 0; counter < alphabet.length; counter += 1) {
  console.log(alphabet[counter]);
}

// ARRAYS

// For loops can be used in the same way since arrays are index based

const colors = ["red", "white", "blue"];

for (let counter = 0; counter < colors.length; counter += 1) {
  console.log(`The flag has the color ${colors[counter]}!`);
}

// OBJECTS

// In order to iterate through Object Literals we need to create an array with
// all the keys of the object

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

let pets = Object.keys(numberOfPets);
let addition = 0;

// Very complicated way of iterating over object, but assures no prototypes
while (addition < pets.length) {
  let currentPet = pets[addition];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}`);
  addition += 1;
}
// Not a good way, since it will iterate over prototypes
// eslint-disable-next-line no-restricted-syntax
// eslint-disable-next-line guard-for-in
for (const currentPet in numberOfPets) {
  const currentPetNumber = numberOfPets[currentPet];
  console.log(`She has ${currentPetNumber} ${currentPet}`);
}

/* ---------------------------------LOOP CONTROLS---------------------------*/

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}
let arr = [1, 2, 3, 3];
