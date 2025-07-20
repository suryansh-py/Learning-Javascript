//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// These are Call by Value - original value is copied & changes are made to the copied value
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); //bigint

console.log(typeof outsideTemp); //object




// Reference (Non primitive)
// Array, Objects, Functions
// These are Call by Reference - the memory reference is directly given

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "suryansh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); //function but functionobject

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack (Primitive) - copy of original
// Heap (Non-primitive) - reference & change in original