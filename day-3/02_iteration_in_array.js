let fruits = ["apple", "banana", "orange"];

// Using a for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log("fruits[", i, "] =", fruits[i]);
}

// Using forEach method
console.log("\nUsing forEach method:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}

// Using map method
console.log("\nUsing map method:");
let capitalizedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(capitalizedFruits);

// Using for...in loop (not recommended for arrays)
console.log("\nUsing for...in loop:");
for (let index in fruits) {
  console.log(fruits[index]);
}

// Using entries method
console.log("\nUsing entries method:");
for (let [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}

// among all of this iteration forEach loop is use more than other loop
