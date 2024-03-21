// In JavaScript, an array is a data structure that allows you to store multiple values in a single variable.
// Arrays can contain various types of data, including numbers, strings, objects, and even other arrays.

// creating empty array
let emptyArr = [];
// creating array of numbers
let numbers = [10, 20, 30, 50];

// creating array of string
let stringArr = ["ram", "jhon", "hari", "suresh"];

// creating array of mixed data types
let mixedArray = ["ram", 20, true, { location: "kathmandu" }];
console.log(mixedArray);

// array length in js
let lengthOfArray = mixedArray.length;
console.log("Length of mixedArray: ", lengthOfArray); // 4

// accessing element
console.log(mixedArray[0]);

// modify an array
mixedArray[0] = 85;
console.log(mixedArray);

//  push and
let arr2 = [25, 85, 65, 45];
arr2.push(90);
console.log(arr2);

// pop
let arr3 = ["ram", "shyam", "hari", "binod"];
arr3.pop();
console.log(arr3);

// The shift() and unshift() methods in JavaScript are used to add and remove elements from the beginning of an array, respectively.

// shift()
// The shift() method removes the first element from an array and returns that removed element. It also updates the indices of other elements in the array.

let arr4 = [50, 45, 75, 85];
let newVar = arr4.shift();
console.log("shift", newVar);
console.log(arr4);

// unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits = ["banana", "orange"];

let newLength = fruits.unshift("apple");

console.log(newLength); // Outputs: 3
console.log(fruits); // Outputs: ['apple', 'banana', 'orange']
