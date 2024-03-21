// In JavaScript, objects are a fundamental data type used to store collections of key-value pairs, where each key is a string (or symbol) and each value can be of any data type, including other objects.
//Objects can be created using object literals, constructor functions, or ES6 class syntax.

// object letral is easy way to create object in js
let person = {
  name: "kshittiz",
  address: {
    city: "kalanki",
    country: "kathmandu",
  },
  age: 22,
  email: "kshittiz950@gmail.com",
};

// Accessing properties
console.log(person.name); // Outputs: kshittiz
console.log(person["name"]); // Outputs: kshittiz

console.log(person.address.city); // Outputs: kalanki
console.log(person["address"]["city"]); // Outputs: kalanki

let employee = {
  name: "ram",
  work: function () {
    console.log("Ram Can work hard !!");
  },
};

// calling function
employee.work();

// Constructor Functions:
// Constructor functions are used to create multiple instances of objects with similar properties and methods. They use the new keyword to create new objects based on the defined blueprint.

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

let person1 = new Person("John", 30, "New York");
let person2 = new Person("Alice", 25, "London");

person1.greet(); // Outputs: Hello, my name is John
person2.greet(); // Outputs: Hello, my name is Alice

// Constructor functions
// can also be defined using ES6 class syntax, which provides a more readable and structured way to define objects and their methods.

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

let personOne = new Person("John", 30, "New York");
person.greet(); // Outputs: Hello, my name is John
