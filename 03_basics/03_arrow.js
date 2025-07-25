// 1. What is this?
// this ek special keyword hai jo current execution context (object) ko refer karta hai.
// Value of this decides hoti hai function ko kaise call kiya gaya hai (not where it's defined).

// 2. this in Global Context
// Browser:
// console.log(this); // window object
// Node.js:
// console.log(this); // {} (empty object, not global)

// 3. this in Object Method
// Agar this kisi object ke method ke andar use ho, to this us object ko refer karega:
// const user = {
//   name: "Suryansh",
//   greet() {
    // console.log(this.name);
//   },
// };
// user.greet(); // Suryansh

// 4. this in Regular Function
// function show() {
//   console.log(this);
// }
// show(); 
// Non-Strict Mode: this = global object (window in browser).
// Strict Mode ('use strict'): this = undefined.

// 5. this in Constructor Function
// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Suryansh");
// console.log(p1.name); // Suryansh
// Jab new use hota hai, this naya object banata hai.


// 0. Arrow Functions have NO this
// Arrow functions apna this create nahi karte.
// Wo apne lexical scope ka this use karte hain (matlab jo surrounding function ya object ka this hai).

// 1. Basic Syntax
// Normal Function:
// function add(a, b) {
//   return a + b;
// }

// Arrow Function:
// const add = (a, b) => a + b;

// function keyword nahi lagana padta.
// Agar ek hi return statement ho, to {} aur return bhi hata sakte ho. // Implicit Return



const user = {
    username: "suryansh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this refers to the current context here
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this works only inside objects , we cant use it inside functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// Arrow Function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// Curly Braces use kiya ,toh return keyword likhna hi pdegaa

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // agr parenthesis use kr rhe h , toh return statement nhi likhna pdta hai #UsedinReact

const addTwo = (num1, num2) => ({username: "suryansh"})
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()


// Trying to write an arrow function
const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3
}
console.log(addThree(3,4,5));
