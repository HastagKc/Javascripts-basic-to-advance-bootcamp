// conversion in datatypes
// number to string
let num = 90;
let numberInString = String(num);

console.log(numberInString);
console.log(typeof numberInString);

// string to number
let stringValue = "33";
let stringInNum = Number(stringValue);

console.log(stringInNum); // 33
console.log(typeof stringInNum); // number

let stringValue2 = "22da";
let strToNumber = Number(stringValue2);

console.log(strToNumber); //Nan (Not a number)
console.log(typeof strToNumber); //number

// boolean to number
let isLoggedIn = true;
let boolTonumber = Number(isLoggedIn);
console.log(boolTonumber); // 1
console.log(typeof boolTonumber); //number

// true == 1
// false == 0

// number to boolean

let my_number = -22;
let numToBool = Boolean(my_number);
console.log(numToBool); // true because it if truthy value
console.log(typeof numToBool); // boollean

// String to boolean
let msg = "";
let msgToBoolean = Boolean(msg);

console.log(msgToBoolean); //false because it is falsy value
console.log(typeof msgToBoolean); //boolean
