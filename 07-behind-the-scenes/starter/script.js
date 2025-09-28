'use strict';

// console.log(varX);
// console.log(letX);
// console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//   name: 'Jason',
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();

// const anotherPerson = { name: 'Sarah' };

// // Borrow greet function
// anotherPerson.greet = person.greet;

// // Display or run the greet function for anotherperson
// anotherPerson.greet();

// // Detached function
// const greetFunction = person.greet;

// greetFunction();

// const obj = {
//   name: 'Objects',
//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();

// obj.arrowMethod();

// // Before running, predict the output:
// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular Method:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
//   startModern: function () {
//     console.log(`${this.name} modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments lenth:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log(arguments.length);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length', args.length);
    console.log('First argument:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
// functionTypes.regularFunction('test');
functionTypes.modernFunction('modern', 'approach');

// functionTypes.arrowFunction(1, 2, 3); // This will throw an error
// let age = 30;

// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = { name: 'Jason', age: 21 };

// const friend = me;

// friend.name = 'JohnDoe';
// friend.age = 23;

// console.log('Me:', me);
// console.log('Friend:', friend);

// const original = {
//   name: 'Alice',
//   age: 28,
//   hobbies: ['reading', 'coding'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';

// console.log('Original name:', original.name);
// console.log('Shallow Copy name:', shallowCopy.name);

// shallowCopy.hobbies.push('gaming');

// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

// const deepOriginal = {
//   name: 'Charlie',
//   age: 32,
//   // nested object
//   address: { city: 'Paris', country: 'France' },
//   //nested array
//   hobbies: ['traveling', 'photography'],
// };

// const deepCopy = structuredClone(deepOriginal);

// deepCopy.address.city = 'London';
// deepCopy.hobbies.push('cooking');
// deepCopy.name = 'Lex';

// console.log(DeepOriginal);
// console.log(deepCopy);
