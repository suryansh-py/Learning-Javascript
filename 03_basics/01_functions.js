//  What is a Function?
// Function ek reusable block of code hota hai jo ek particular kaam karta hai.
// You define it once, and you can use (call) it as many times as you want.

// function greet() {
//   console.log("Hello, Suryansh!");
// }
// greet(); // Output: Hello, Suryansh!

// Why Use Functions?
// Code reuse, Modularity (code divided into chunks), Easier to debug and maintain Clean structure

//Note: Function declarations are hoisted (they can be called before they are declared in the code).
// Parameters vs Arguments
// Parameters → While defining function
// Arguments → While calling function
// function greet(name) {           // name = parameter
//   console.log("Hi", name);
// }
// greet("Suryansh");            // "Suryansh" = argument

// Function stops running after return. You can return any value — number, string, object, function, etc.
// Callback Functions --> Function passed as an argument to another function.
// Anonymous Function --> A function without a name (used in expressions, IIFEs, etc.)
// IIFE (Immediately Invoked Function Expression) --> Auto-run function:
// (function () {
//   console.log("This runs immediately");
// })();

// Function Scope & Closure (Important)
// Each function creates a scope for its variables.
// Closure = When a function remembers variables from its parent scope even after the parent is gone.
// function outer() {
//   let count = 0;
//   return function inner() {
    // count++;
    // return count;
//   };
// }
// const counter = outer();
// console.log(counter()); // 1
// console.log(counter()); // 2
// ✅ inner() function has closure over count.

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); //No output
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2       // Method 1
    // return result    
    return number1 + number2
}
// const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginCheck(username){
    return `${username} has logged in`
}
console.log(loginCheck("Suryansh"));


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Suryansh"))

// ------------------------------------------------- Cart mai Saaman Add krna ----------------------------------------------
function calculateCartPrice(val1, val2, ...num1){ // Rest Operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))     // [500,2000]

const user = {
    username: "Suryansh",
    prices: 700
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject(user)
// or
handleObject({
    username: "sam",
    price: 399
})

// Example:1
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// Example:2
const mynewarray = [100,200,300,400,500]
function returnfifthvalue(getArray){
    return getArray[4]
}
console.log(returnfifthvalue(mynewarray));
console.log(returnfifthvalue([1, 4, 8, 9, 31, 13]));