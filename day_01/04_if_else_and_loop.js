//If Statements:

// The `if` statement executes a block of code if a specified condition is true.

let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Loops:

//  1. For Loop:
// The `for` loop repeats a block of code a specified number of times.

for (let i = 0; i < 10; i++) {
  console.log("Iteration " + (i + 1));
}

// 2. While Loop:
// The `while` loop repeats a block of code while a specified condition is true.

console.log("While loop");
let i = 0;
while (i < 5) {
  console.log("Iteration " + (i + 1));
  i++;
}

//  3. Do-While Loop:
// The `do-while` loop is similar to the `while` loop,
// but it guarantees that the block of code is executed at least
// once before checking the condition.

let j = 0;
do {
  console.log("Iteration " + (j + 1));
  j++;
} while (i < 5);

//4. For-In Loop:
// The `for-in` loop iterates over the properties of an object.

const person = {
  name: "John",
  age: 30,
  gender: "male",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}



//  5. For-Of Loop:
// The `for-of` loop iterates over the iterable objects like arrays, strings, etc.

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
