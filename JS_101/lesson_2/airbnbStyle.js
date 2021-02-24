/*--------------------------TYPES-------------------------------*/
// //When you work on primitives, you work directly on its value
// const foo = 1;
// let bar = foo;

// bar = 9;

// console.log(foo, bar)// => 1, 9

// //When working on complex data types, you work on a reference to its value
// const fool = [1, 2];
// const bart = fool;

// bart[0] = 9;
// console.log(fool[0], bart[0]);//=>9,9

/*--------------------------REFERENCES-----------------------------*/
// //references means the let, const and var statement
// //1.Use const for all your references, avoid using var
// //bad
// var a = 1;
// var b = 2;
// //good
// const a = 1;
// const b = 2;
// //2.if you must reassign references, use let instead of var
// //bad
// var count = 1;
// if (true) {
//   count += 1;
// }
// //good, use the let statement
// let count = 1;
// if (true) {
//   count += 1;
// }
// //both let and const are block scoped
// {
//   let a = 1;
//   let b = 2;
// }
// console.log(a, b); //ReferenceError

/*--------------------------OBJECTS-----------------------------*/
// //Use the literal syntax for object creation instead of  new Object
// //bad
// const item = new Object();
// //good
// const item2 = {};

// //Use object method shorthand when creating functions
// //bad
// const atom = {
//   value: 1,
//   addValue: function (value) {
//     return atom.value + 1;
//   },
// };
// //good
// const atom2 = {
//   value: 4,
//   addValue(value) {
//     return atom2.value + 1;
//   },
// };
// // console.log(atom2.addValue())//=>5

// //Use property value shorthand, its shorter and descriptive
// const lukeSkywalker = 'Luke Skywalker';
// //bad
// const obj = {
//   lukeSkywalker: lukeSkywalker,
// };
// //good
// const obj2 = {
//   lukeSkywalker,
// };
// // console.log(obj2)//=>{lukeSkywalker: 'Luke Skywalker'}

// //Group shorthand properties at beggining of object declaration
// const anakinSkywalker = 'Anakin Skywalker';
// const darthVader = 'Darth Vader';
// //bad
// const obj3 = {
//   episode1: 1,
//   anakinSkywalker,
//   mayTheFourth: 4,
//   darthVader,
// };
// //good
// const obj4 = {
//   anakinSkywalker,
//   darthVader,
//   episode1: 1,
//   mayTheFourth: 4,
// };

//Only wrap properties with quotes that are invalid identifiers
//(why? Its subjectively easier to read)
//bad
// const obj5 = {
//   'foo': 1,
//   'bar': 2,
//   'data-blah': 3,
// };
// //good
// const obj6 = {
//   foo: 1,
//   bar: 2,
//   'data-blah': 3,
// };
// eslint-disable-next-line max-len
// //Prefer the object spread operator over object.assign to shallow copy objects.
// //bad
// const original = { a: 1, b: 2 };
// const copy = Object.assign({}, original, { c: 3 });
// //good
// const original2 = { a: 1, b: 2 };
// const copy2 = { ...original2, c: 3 };

/*--------------------------ARRAYS-----------------------------*/
// //Use literal syntax for Object creation
// //bad
// let items = new Array();
// //good
// let items2 = [];

// //USE Array.push() INSTEAD OF DIRECT ASSIGNMENT TO ADD ITEMS TO ARRAY
// const someStack = [];
// //bad
// someStack[someStack.length] = 'hello my darling';
// //good
// someStack.push('hello my darling');

// //USE ARRAY SPREADS...TO COPY ARRAYS
// //bad
// const len = items.length;
// const itemsCopy = [];

// for (let i = 0; i < len; i += 1) {
//   itemsCopy[i] = items[i];
// }
// //good
// const itemsCopy = [...items];

// //USE `Array.from` for converting an array-like object to an array
// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// //bad
// const arr1 = Array.prototype.slice.call(arrLike);
// //good
// const arr = Array.from(arrLike);
// console.log(arr);//=>[ 'foo', 'bar', 'baz' ]

// //USE Return statement in array method callbacks.
// //(ok to ommit if function body consists of single statement, returning expression without side effects)
// //good
// [1, 2, 3].map((x) => {
//   const y = x + 1;
//   return x * y;
// });
// //good, no need for return since, its a single statement
// [1, 2, 3].map((x) => x + 1);

// //bad, not using return value, makes 0 undefined
// [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
//   const flatten = acc.concat(item);
// });
// //good, using return value
// [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
//   const flatten = acc.concat(item);
//   return flatten;
// });

// eslint-disable-next-line max-len
// //USE line break after open and before close array brackets if arary has multiple lines
// //bad
// const numberInArray = [
//   1, 2,
// ];
// //good
// const numberInArray2 = [
//   1,
//   2,
//   3,
// ];
// //bad
// const objInArray = [{
//   id: 1,
// }, {
//   id: 2,
//   }];
// //good
// const objInArray2 = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
// ];


/*--------------------------STRINGS-----------------------------*/
// //USE single quotes for strings
// //bad
// const name = "Capt. Janeway";
// //bad, template literals should contain interpolation
// const newName = `Capt. Stamos`;
// //good
// const bestName = 'Capt. Underpants';

// //STRINGS that cause the line to go over 100 characters shouldnt be written across multiple lines using string concat
// // bad
// const errorMessage = 'This is a super long error that was thrown because \
// of Batman. When you stop to think about how Batman had anything to do \
// with this, you would get nowhere \
// fast.';

// // bad
// const errorMessage = 'This is a super long error that was thrown because ' +
//   'of Batman. When you stop to think about how Batman had anything to do ' +
//   'with this, you would get nowhere fast.';

// // good
// const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// //WHEN programmatically building up strings, use template strings instead of concatenation
// //bad
// function sayHi(name) {
//   return 'How are you, ' + name + '!';
// }
// //bad
// function sayHi(name) {
//   return ['How are you, ', name, '!'].join();
// }
// //bad
// function sayHi(name) {
//   return `How are you, ${ name }`;//trailing space on name
// }
// //good
// function sayHi(name) {
//   return `How are you, ${name}`;
// }

/*--------------------------FUNCTIONS-----------------------------*/
// //USE named function expressions instead of function declarations
// //(it can bring problems when invoking before declared)
// //bad
// function foo() {
//   //...
// }
// //bad
// const bar = function () {
//   //...
// };
// //good, descriptive function declaration
// let print = function printName(name) {
//   console.log(name);
// };

// //NEVER declare a function in a non-function block (if, while, for). Assign a function to a variable instead
// //bad
// if (user) {
//   function test() {
//     console.log('Nope.');
//   }
// }
// //good
// let test;
// if (user) {
//   test = () => {
//     console.log('Yup.');
//   };
// }

// //NEVER name a parameter, arguments. It will take precedence over the arguments object given to every function
// //bad
// function foo(name, options, arguments) { };
// //good
// function foo(name, options, args) { };

// //AVOID side effects with default parameters
// let b = 1;
// function count(a = b++) {
//   console.log(a);
// }
// count();
// count();
// count();

/*--------------------------ARROW FUNCTIONS-----------------------*/
// //When a method uses a callback function, use arrow function for function invocations instead of an anonymous function
// //bad
// [1, 2, 3].map(function (x) {
//   const y = x + 1;
//   return x * y;
// });
// //good
// [1, 2, 3].map((x) => {
//   const y = x + 1;
//   return x * y;
// });
// //If a function body consists of a single statement returning expression without side effects, omit the braces and use the implicit return
// //bad
// [1, 2, 3].map((number) => {
//   const nextNumber = number + 1;
//   `A string containing the ${nextNumber}`;
// });
// //good
// [1, 2, 3].map((number) => `A string containing the ${number + 1}`);

// //If a function body has more than one expression, keep the braces and use a return statement
// //good
// [1, 2, 3].map((number) => {
//   const multiplyNumber = number * number;
//   return `the multiplication of ${multiplyNumber}`;
// });

// //ALWAYS include parenthesis around arguments for clarity
// //bad
// [1, 2, 3].map(x => x * x);
// //good
// [2, 4, 6].map((x) => x + x);

// //AVOID confusing arrow functions syntax with comparison operators
// //bad
// const itemHeight = (item) => item <= 10 ? 'yes' : 'no'; 
// //good
// const itemLength = (item) => (item <= 10 ? 'yes' : 'no');

/*---------------------ITERATORS AND GENERATORS--------------------*/
// //Dont use iterators like for-in loop or for-of loop, use higher order functions like map/every/filter
// const numbers = [1, 2, 3, 4, 5];
// //bad
// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// //good
// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
// });
// //best
// numbers.reduce((acc, num) => acc + num, 0);
// //ANOTHER EXAMPLE
// //bad
// const increaseByOne = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   increaseByOne.push(numbers[i] + 1);
// }
// //good
// const increaseByOne = [];
// numbers.forEach((num) => {
//   increaseByOne.push(num + 1);
// });
// //best, keeping it functional
// const increaseByOne = numbers.map((num) => num + 1);

/*-----------------------------VARIABLES--------------------------*/
// //USE only one const or let declaration per variable or assignment
// //bad
// const items = getItems(),
//   goSportsTeam = true,
//   dragonball = 'z';
// //good
// const shopping = goShopping();
// const isMaterialBrick = false;
// const dayOfWeek = 'tuesday';

// // //GROUP all your const first, your lets after
// //bad
// let i;
// const items = getItems();
// let dragonball;
// const candyFlavor = 'mint';
// let length;
// //good
// const items = getItems();
// const candyFlavor = 'mint';
// let i;
// let dragonball;
// let length;

// //DONT chain varible assignments
// //they turn the rest of the variables into global variables
// //bad
// (function example() {
//   let a = b = c = 1;
//   //the let only applies to a, b and c become global variables
// }());
// console.log(a); // throws ReferenceError
// console.log(b); // 1
// console.log(c); // 1
// //good
// (function example() {
//   let a = 1;
//   let b = a;
//   let c = a;
// }());
// console.log(a); // throws ReferenceError
// console.log(b); // throws ReferenceError
// console.log(c); // throws ReferenceError

// //Disallow unused variables
// //Why? they take up space in the code and lead to confusion
// //bad
// let someUnusedVar = 42;
// //write-only variables are not considered used
// let y = 10;
// y = 5;
// //A read for a modification of itself is not considered used
// let z = 0;
// z = z + 1;
// //Unused function arguments
// function getX(x, y) {
//   return x;
// }

// //GOOD

// function getXPlusY(x, y) {
//   return x + y;
// }

// let x = 1;
// let y = x + 2;

// alert(getXPlusY(x, y));

/*---------------------------HOISTING--------------------------*/
// //Var declarations get hoisted to the top of their enclosing function scope, their assignments do not. const and let declarations 

// if (true) {
//   console.log(hoisted);
//   //returns undefined, the var hoisted moves to top but doesnt
//   //get assigned
//   var hoisted = 'Go to the top';
// }


// if (true) {
//   console.log(temporalDead);//ReferenceError
//   //let and const do get moved to the top but cant do anything
//   //with them until they are declared and defined
//   let temporalDead = 'Temporal Dead Zone'
// }

/*---------------------COMPARISON OPERATORS & EQUALITY-------------*/
//USE === and !== over == and !=

// //if statements evaluate their expression using coercion with the ToBoolean abstract method

// function boolean(value) {
//   return (value === 'dog' || value === 'cat');
// }
// console.log(boolean('dog'));

// //Use shortcuts for booleans, but explicit comparison for strings and numbers
// //bad
// if (isValid === true) { };
// //good
// if (isValid) { };

// //bad
// if (name) { };
// //good
// if (name !== '') { };

// //bad
// if (collection.length) { };
// //good
// if (collection.length > 0) { };

// //Ternaries shouldnt be nested and generally be single line expressions
// //bad
// const foo = maybe1 > maybe2 ? 'bar'
//   : value > value2 ? 'baz' : null;

// //split into 2 separate expressions
// const maybeNull = value > value2 ? 'baz' : null;
// //best
// const foo = maybe1 > maybe2 ? 'bar' : maybeNull;

// //Avoid uneeded ternary statements
// //bad
// const foo = a ? a : b; //dumb
// const bar = c ? true : false;//true
// const baz = d ? false : true;//not true
// //good
// const foo = a || b;//comparison
// const bar = !!c;//true
// const baz = !c;//not true

// //When mixing operators, enclose them in parenthesis for better readability unless its the + - **
// //bad
// const foo = a && b < 0 || c > 0 || d + 1 === 0;

// const bar = a ** b - 5 % d;

// if (a || b && c) {
//   return d;
// }

// const baz = a + b / c * d;
// //good
// const foo = (a && b < 0) || c > 0 || ((d + 1) === 0);

// const bar = (a ** b) - (5 % d);

// if ((a || b) && c) {
//   return d;
// }

// const baz = ((a + b) / c) * d;

/*---------------------BLOCKS-----------------------*/
// //Use braces with all multiline block
// //bad
// if (test)
//   return false;

// function foo() { return false; }

// //good
// if (test) return false;

// if (test) {
//   return false;
// }

// function foo() {
//   return false;
// }

// //In multiline block with if else statements, put else sttements in same line as closing and opening brackets
// //bad
// if (test) {
//   thing1();
// }
// else {
//   thing2();
// }
// //good
// if (test) {
//   thing1();
// } else {
//   thing2();
// }
// //if block executes return statement, return statement is unecessary in else statement
// //bad
// function foo() {
//   if (x) {
//     return x;
//   } else {
//     return y;
//   }
// }
// //good
// function foo() {
//   if (x) {
//     return x;
//   }
//   return y;
// }

// //else if statement uses multiple return statements, separate into to if statements
// //bad
// function cat() {
//   if (x) {
//     return x;
//   } else if (y) {
//     return y;
//   }
// }
// //good
// function cat() {
//   if (x) {
//     return x;
//   }
//   if (y) {
//     return y;
//   }
// }
// //if you use if/else/if statement with return values its better to use nested if statements
// //bad
// function dogs() {
//   if (x) {
//     return x;
//   } else {
//     if (y) {
//       return y;
//     }
//   }
// }
// //good
// function dogs(x) {
//   if (x) {
//     if (z) {
//       return y;
//     }
//   } else {
//     return z;
//   }
// }

/*---------------------BLOCKS-----------------------*/
