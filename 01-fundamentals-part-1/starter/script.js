// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js = 'amazing';
// // // console.log(40 + 8 + 23 - 10);
// // // console.log(js);

// // // console.log("=== VARIABLES ===");

// // // let firstName = "Jonas";
// // // console.log(firstName);

// // // let age = 30;
// // // console.log(age);
// // // age = 50; 
// // // console.log(age);

// // // const birthYear = 1991;
// // // console.log(birthYear);




// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = 'programmer';
// // // job = 'teacher';
// // // console.log(job);

// // // const county = "Philippines";
// // // const language = "Tagalog";

// // // age = 25;
// // // age = 26;

// // // // good variable name
// // // // let firstName
// // // // let myCurrentJob
// // // // const PI

// // // //bad name
// // // // let 3 years
// // // // let jonas&matilda
// // // // let now

// // // console.log("=== DATA TYPES ===");

// // // //Number
// // // let id = 12345;
// // // console.log(id);
// // // console.log(typeof id);

// // // //String
// // // let lastName = "Doe";
// // // console.log(lastName);
// // // console.log(typeof lastName);

// // // //Boolean
// // // let JavaScriptIsFun = true;
// // // console.log(JavaScriptIsFun);
// // // console.log(typeof JavaScriptIsFun);

// // // //undefined
// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // let dynamicVariable = 40;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // //change to a string
// // // dynamicVariable = "I am now a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // //change to a boolean
// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // Basic Operators - Math
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // //More math operators
// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); 

// // console.log("Math Operations");
// // console.log("Addition", 10 + 5);
// // console.log("Subtraction", 10 - 8);
// // console.log("Multiplication", 4 * 7);
// // console.log("Division", 15 / 3);
// // console.log("Exponentiation", 2 ** 3);

// // //Math with Strings!
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console. log(firstName + " " + lastName);

// // console.log("Hello" + "World" + "!");

// // //Assignment Operators
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5; //15
// // console.log("x starts as:", x);

// // x += 10; // x = x + 10 = 25  
// // console.log("x starts as:", x);

// // x *= 4; // x = x * 4 = 100
// // console.log("x starts as:", x);

// // x /= 2;
// // console.log("x starts as:", x);

// // x ++;
// // console.log("x starts as:", x);

// // x --;
// // console.log("x starts as:", x);

// // // comparison operators
// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age comparison");
// // console.log(ageJonas > ageSarah); // >, <, >=, <=
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparison");
// // console.log(25 > 20);
// // console.log(25 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is an adult:", isFullAge);

// // console.log("Complex comparison");
// // console.log(now -1991 > now - 2018);

// // let z, y;
// // z = y = 25 - 10 - 5; // z = y = 10, z = 10
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // // Your code here:
// // // 1. Calculate BMIs
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);

// // // 2. Create markHigherBMI variable
// // const markHigherBMI = BMIMark > BMIJohn;

// // // 3. Log results to console
// // //log marks bmi
// // console.log(BMIMark);
// // //log johns bmi
// // console.log(BMIJohn);
// // //log markHigherBMI
// // console.log(markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);


// console.log(`I'm ${2037 - 1991} years old!`);
// console.log(`Math works here: ${2 + 3} equal five`);

// //if else statements
// const age = 10;

// if (age >= 18) {
//     console.log(`Sarah can start driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(""));

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 55;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// Type Conversion and Coercion
const inputYear = "1991"
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

//Automatic Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log('23' / '2');
console.log('23' * '2');

let n = '1' + 1;
console.log(n);

n = n - 1;
console.log(n);

//type conversion = explicit/manual (recommended)
//type coercion = implicit/automatic (javascript does itself)

// Equality - Strict

const age = 18;
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

console.log('18' === 18);
console.log('18' == 18); 
console.log(18 === 18);

//why == can be dangerous
console.log(0 == false);
console.log('0' == false);
console.log('0' == false);
console.log(null == undefined);

console.log('' == 0);
console.log('  ' == 0);

// best practice
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');









//Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Jason is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// More complex scenarios
age = 20;
const hasPermission = true;
const hasExperience = false;

//Can drive if: (age >= 18 or has permission) AND has experience
if ((age >= 18 || hasPermission) && hasExperience) {
    console.log('Approved to drive');
} else {
    console.log('Not approved to drive');
}

// Test with different values
console.log("Age 20, permission true, experience false:",
    (age >= 18 || hasPermission) && hasExperience
);

//"Create a club entry systems;
// 1. Create variable: age (number), hasID (boolean), isVIP (boolean)
// 2. Entry rules: (age >= 21 AND hasID) OR isVIP
//3. Test with different combinations:
//    -age 25, hasID true, isVIP false (should enter)
//    -age 19, hasID true, isVIP true (should enter)
//    -age 19, hasID false, isVIP false (should not enter)
// 4. Use if/else to log appropriate messages"

/////////////////////////////////////
//The Conditional (Ternary) Operator

const age = 23;

//basic ternary:condition ? valueifTrue : valueifFalse
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// if else statement
let drink2
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
