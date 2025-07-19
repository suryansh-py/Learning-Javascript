const score = 400
// console.log(score);

const balance = new Number(100) //#new keyword creats a brand new empty object , gets its internal prototype, this keyword inside the constructor fn -- properties of this become properties of new object . Then the code inside constructor fn is then executed in the context of this newly created object.
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); #convert to positive
// console.log(Math.round(4.6)); #roundoff
// console.log(Math.ceil(4.2)); #choose top value
// console.log(Math.floor(4.9)); #choose lowest value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //#values always btw 0 & 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //wil give value btw 1 & 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)