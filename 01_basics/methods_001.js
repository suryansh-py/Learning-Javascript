// What is a Method in JavaScript?
// Jab koi function kisi object ke andar hota hai, usse method kehte hain. (in other words)
// A method is simply a function stored as a property inside an object.

// Function
function greet() {
  console.log("Hello");
} //Code block jo kisi bhi context mein ho sakta hai 

// Method
const obj = {
  greet: function () {
    console.log("Hello");
  }
}; //greet is a method.

// Types of Methods in JS
// 1. Object Methods
// Function defined inside an object.

// 2. Shorthand Syntax (ES6)
// const person = {
//   speak() {
//     console.log("Speaking...");
//   }
// };
// person.speak(); // Speaking...

// 3. Built-in Methods (jo JS ne hume diye hain)
// 📦 String Methods:
// let str = "JavaScript";
// console.log(str.length);       // 10
// console.log(str.toUpperCase()); // "JAVASCRIPT"
// console.log(str.includes("Script")); // true

// 🔢 Array Methods:
// let arr = [1, 2, 3];
// arr.push(4);        // [1, 2, 3, 4]
// arr.pop();          // [1, 2, 3]
// arr.map(x => x * 2) // [2, 4, 6]

// 🧱 Object Methods:
// let obj = {
//   a: 1,
//   b: 2
// };
// console.log(Object.keys(obj)); // ["a", "b"]
// console.log(Object.values(obj)); // [1, 2]

// 🧪 Math Methods:
// Math.random();     // Random value 0-1
// Math.floor(4.9);   // 4
// Math.max(1, 5, 3); // 5

// 4. Custom Methods with this
// const student = {
//   name: "Suryansh",
//   marks: 95,
//   showResult: function () {
//     console.log(`${this.name} got ${this.marks} marks`);
//   }
// };
// student.showResult(); // Suryan got 95 marks

// 🔥 this object ke andar current context ko refer karta hai.

// 🤯 Arrow Function as Method? Careful!
// const person = {
//   name: "Suryansh",
//   sayHi: () => {
//     console.log("Hi " + this.name);
//   }
// };
// person.sayHi(); // Hi undefined ❌

// ❗️Why?
// Arrow function ka this object ke context se bind nahi hota, wo outer lexical scope ka this use karta hai.
// ✅ Always use regular function when defining a method if you need this.