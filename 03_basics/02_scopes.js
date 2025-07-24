// JavaScript mein scope decide karta hai ki variable/method ko kaha access kar sakte hai aur kaha nahi.
// (A) Global Scope
// Jo variable function ke bahar declare hota hai, wo global scope me hota hai.
// Usko kahin se bhi access kar sakte ho (browser mein window ka part hota hai).
// Example:
// var name = "Suryansh"; // Global Scope
// function greet() {
//   console.log("Hi " + name);
// }
// greet();             // Hi Suryansh
// console.log(name);   // Hi Suryansh

// (B) Function Scope (Local Scope)
// Jo variable function ke andar declare hota hai, wo function ke bahar available nahi hota.
// Example:
// function test() {
//   var x = 10;  // Function Scope
//   console.log(x);
// }
// test();
// console.log(x); // ❌ Error: x is not defined

// (C) Block Scope (ES6 let & const)
// { } curly braces ke andar jo variable let or const se declare hote hain, wo block scope ke andar hote hain.
// Example:
// if (true) {
//   let y = 20;
//   const z = 30;
// }
// console.log(y); // ❌ Error: y is not defined

// Note: var block scope ko ignore karta hai:
// if (true) {
//   var a = 100;
// }
// console.log(a); // 100 ✅

// (D) Lexical Scope
// Ek function apne parent function ke variables ko access kar sakta hai.
// Ye concept Closures ka base hai.
// function outer() {
//   let outerVar = "I am Outer";
//   function inner() {
    // console.log(outerVar); // Access allowed due to lexical scope
//   }
//   inner();
// }
// outer();

// (E) Module Scope (ES6 Modules)
// Jab hum JavaScript modules (import/export) use karte hain, to ek file ka variable dusri file ke liye default global nahi hota.
// Har module ka apna scope hota hai.

// 3. Scope Chain
// Jab JavaScript kisi variable ko search karta hai:
// Pehle current scope me dekhta hai.
// Nahi milta → parent scope me search.
// Nahi milta → global scope me search.
// Agar global me bhi nahi milta → ❌ ReferenceError.

//var globalVar = "Global";
// function outer() {
//   var outerVar = "Outer";
//   function inner() {
    // var innerVar = "Inner";
    // console.log(globalVar); // ✅ Global
    // console.log(outerVar);  // ✅ Outer
    // console.log(innerVar);  // ✅ Inner
//   }
//   inner();
// }
// outer();

// 4. Hoisting & Scope
// JavaScript hoist karta hai var declarations ko function ke top par (value = undefined).
// let & const bhi hoist hote hain but unka Temporal Dead Zone (TDZ) hota hai (jab tak initialize nahi kiya jata).

// console.log(a); // undefined (hoisted)
// var a = 10;
// console.log(b); // ❌ Error (TDZ)
// let b = 20;

// # What is Hoisting?
// Hoisting ka matlab hai:
// JavaScript engine code ko execute karne se pehle variable & function declarations ko memory me "top" pe move kar deta hai.
// Declarations hoist hoti hain, initializations nahi.

// # Variable Hoisting (var)
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// Behind the scenes:
// JS isko aise treat karta hai:

// var a;           // declaration hoist ho gayi
// console.log(a);  // undefined
// a = 10;          // initialization
// console.log(a);  // 10

// # Let & Const Hoisting (TDZ)
// let and const bhi hoist hote hain, but "Temporal Dead Zone (TDZ)" me rehte hain jab tak code un tak nahi pohonchta.
// Isiliye unhe access karna declaration se pehle error deta hai.
// console.log(b); // ❌ ReferenceError
// let b = 20;

// # Function Hoisting
// (A) Function Declaration Hoisting
// greet(); // ✅ Works
// function greet() {
//   console.log("Hello");
// }
// Function declarations complete hoist hoti hain (poora body ke sath).

// (B) Function Expression Hoisting
// sayHi(); // ❌ Error: sayHi is not a function
// var sayHi = function() {
//   console.log("Hi");
// };
// Function expressions behave like variables, so only declaration hoist hota hai (sayHi = undefined).

// (C) Arrow Function Hoisting
// hello(); // ❌ Error
// const hello = () => console.log("Hi");
// Arrow functions are not hoisted -- kyunki arrow functions function expressions ki tarah behave karte hain, aur function expressions ka hoisting behaviour var, let, const ke hisaab se hota hai.(same as const).

// #6. Hoisting Priority
// Function Declarations (Highest)
// var variables
// let & const (in TDZ)




//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "suryansh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "suryansh"
    if (username === "suryansh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
