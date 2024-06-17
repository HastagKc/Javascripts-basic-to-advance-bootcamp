// static and heap memory

// static(primitive types )
// heap (non-primitive tupes )


let name = 'kshittiz'
let anotherName = name
anotherName = "Ram"

console.log(name) // output kshittiz
console.log(anotherName) // output Ram 



// heap memory 

let obj1 = {
    'name': 'Kshittiz',
    'age': 22,
    'email': 'chaudharykshittiz@gmail.com'
}

let obj2 = obj1
obj2.name = "Ram"

console.log(obj1.name)
console.log(obj2.name)