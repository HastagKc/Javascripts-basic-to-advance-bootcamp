// JavaScript supports several data types, which can be broadly categorized
// into two main categories: primitive data types and reference data types.

//  1. Primitive Data Types:

// 1. Number:
// Represents numeric values.JavaScript represents all numbers as floating - point values.

let num = 22;
console.log(num);

// 2. String:
//  Represents textual data. Strings are sequences of characters enclosed within
// single(''), double("") or backtick(``) quotes.

let my_name = "kshittiz";
let msg = "Hello world";
let profession = "developer";
let des = `i am ${my_name} and i want to be a great software engineer`;

console.log(msg);
console.log(profession);
console.log(des);

// 3. Boolean:
// Represents a logical value indicating `true` or`false`.

let isTrue = true;
let isFalse = false;

// 4. Undefined:
// Represents a variable that has been declared but has not been assigned a value.

let undefinedValue;
console.log(undefinedValue); // undefined

// 5. Null:
// Represents an intentional absence of any object value.

let name = null;
console.log(name);

// 6. Symbol:
// Introduced in ECMAScript 6(ES6), symbols are unique and immutable
// data types, often used as object property keys.

// Symbols in JavaScript are a unique and immutable data type
//introduced in ECMAScript 6 (ES6). They are often used
// as unique identifiers, particularly as property keys in objects,
//  to avoid naming conflicts. Symbols are created using the Symbol() function,
//  which returns a new, unique symbol each time it's called.

const symbol1 = Symbol();
const symbol2 = Symbol("description");

//  2. Reference Data Types:

// 1. Object:
// Represents a collection of key - value pairs, where each key is a string(or symbol)
//and each value can be of any data type, including other objects.
let person = { name: "John", age: 30 };

// 2. Array:
// Represents a collection of elements stored at contiguous memory
// locations.Arrays can contain elements of different data types and are indexed starting from zero.

let number = [10, 20, 30, 40];
console.log(number);

// 3. Function:
// Functions are first - class citizens in JavaScript, meaning they can be assigned
//to variables, passed as arguments, and returned from other functions.

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// 4. Date:
// Represents a date and time value.

let currentDate = new Date();
console.log(currentDate);

// 5. RegExp:
// Represents a regular expression object for pattern matching strings.
// In JavaScript, RegExp stands for Regular Expression. It's a powerful tool
// used for pattern matching within strings. Regular expressions can be used for
// tasks such as searching for specific patterns, replacing parts of strings, and validating input.

const isValidGmail = (email) => {
  // Regular expression pattern to match valid Gmail addresses
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailRegex.test(email);
};

// Test the function with example email addresses
console.log(isValidGmail("kshittiz@gmail.com")); // Output: true
console.log(isValidGmail("invalid@example.com")); // Output: false
