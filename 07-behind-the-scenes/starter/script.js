'use strict';

console.log(varX);
// console.log(letX);
// console.log(constX);

var varX = 1;
let letX = 2;
const constX = 3;

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  // nested object
  address: { city: 'Paris', country: 'France' },
  //nested array
  hobbies: ['traveling', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log(DeepOriginal);
console.log(deepCopy);
