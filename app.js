// Create a constant variable.
const myAge = 26;

// Create a variable whose value can change.
let earlyYears = 2;

earlyYears *= 10.5;

// Substract 2 from the myAge variable and save it into a new variable that can be changed later.
let laterYears = myAge - 2;

// Multiply laterYears by 4 and use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Add earlyYears and laterYears together, and store that in a new variable.
let myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
let myName = 'Marion'.toLowerCase();

// Write a console.log statement that displays your name and age in dog years by using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);