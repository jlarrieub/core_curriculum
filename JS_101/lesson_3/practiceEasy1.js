// /*----------------------------Question1-------------------------*/
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// //no, it wont, it will create empty spaces
// //bonus: it will return undefined although it is empty

// /*----------------------------Question2-------------------------*/
// //How can you determine whether a given string ends with an exclamation mark (!)?
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
// //using the .includes method//WRONG
// // console.log(str1.endsWith('!'));
// /*----------------------------Question3-------------------------*/
// //Determine whether the following object of people and their age contains an entry for 'Spot':
// // let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// // console.log(ages.hasOwnProperty('Spot'))
// // if ('Spot' in ages) {
// //   console.log(true)
// // } else {
// //   console.log(false)
// // }
// /*----------------------------Question4-------------------------*/
// // Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// let newString = munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1).toLowerCase();
// console.log(newString);

// /*----------------------------Question5-------------------------*/
// //What will the following code output?
// console.log(false == '0');//true
// console.log(false === '0');//false

// /*----------------------------Question6-------------------------*/
// //We have most of the Munster family in our ages object:
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// //Add entries for Marilyn and Spot to the object:
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges)

// /*----------------------------Question7-------------------------*/
// // Determine whether the name Dino appears in the strings below -- check each string separately):
// let strA = "Few things in life are as important as house training your pet dinosaur.";
// let strB = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(strA.includes('Dino'))
// console.log(strB.includes('Dino'))

// /*----------------------------Question8-------------------------*/
// // How can we add the family pet, "Dino", to the following array?

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones[flintstones.length] = 'Dino';
// flintstones.push('Dino2')
// console.log(flintstones)

// /*----------------------------Question9-------------------------*/
// let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones2.push('Dino', 'Hoppy');
// console.log(flintstones2);

/*----------------------------Question10-------------------------*/
// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.slice(0, advice.indexOf('house'));
console.log(newAdvice);
// Expected return value:
// => 'Few things in life are as important as '
