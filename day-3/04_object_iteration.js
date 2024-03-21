// for..in loop in object

let person = {
  firstName: "Kshittiz",
  lastName: "Chaudhary",
  age: 22,
  displayName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
person.displayName();

for (let i in person) {
  console.log(person[i]);
}
