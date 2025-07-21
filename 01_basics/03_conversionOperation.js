// Coercion : automatic or implicit conversion of values from one data type to another
//📌 JS is dynamically typed, so types are flexible, and coercion happens all the time — sometimes helpfully, sometimes dangerously.

let score = "suryansh"

// console.log(typeof score); //string
// console.log(typeof(score)); //string  (as a method)

let valueInNumber = Number(score) //Number is written to convert anything to Number
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN

// console.log(valueInNumber) #score (typeof will always show it as number)
// "33" => 33
// "33abc" => NaN
// undefined => NaN
// "" => 0
// null => 0
// [] => 0
// [1,2,3] => NaN
//  true => 1; false => 0
// Symbol() => TypeError


let isLoggedIn = "suryansh"
let booleanIsLoggedIn = Boolean(isLoggedIn) //Boolean is written to convert anything to Boolean
 console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
// Remember [ "",0,-0,0n,null,undefined,NaN are converted to False] FALSY VALUES
// All other values are converted to true.


let someNumber = 33
let stringNumber = String(someNumber) //String is written to convert anything to String
console.log(typeof stringNumber); //string
console.log(stringNumber); //33

// undefined => "undefined"
// null => "null"
// true => "true"
// false => "false"
// [1,2,3] => "1,2,3"   elements joined by commas
// [] => ""             empty string
// {} => "[object Object]"
// function(){} => "function functionName() { }"    (function body as string)
// Symbol('id') => "Symbol(id)"



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); Power
// console.log(2/3);
// console.log(2%3); Modulus

let str1 = "hello"
let str2 = " suryansh"
let str3 = str1 + str2
// console.log(str3); // hello suryansh

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); out=  122
// console.log(1 + 2 + "2"); out= 32
// So , agr string phle likha h toh sbhi ko String consider krega
// & if string end m h toh nhi krega

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); out=1
// console.log(+""); out=0
// null == undefined // true

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// Prefix and Postfix Operator in jS
// 1.Prefix Operator (++variable or --variable) -> The variable is incremented or decremented first
// The new, updated value of the variable is returned
let x = 5;
let y = ++x; // x is incremented to 6, then the new value is assigned to y
console.log(x); // 6
console.log(y); // 6
// 2.Postfix Operator (variable++ or variable--) -> The original value of the variable is used first in the expression
// The original (unmodified value of the variable is returned) . The variable is then incremented or decremented after the expression has been evaluated.
let a = 4;
let b = a++; // The original value of a is assigned to b, then a is incremented to 5
console.log(a); // 5
console.log(b); // 4


// The + exists in two forms: the binary form that we used above and the unary form.
// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers.
// But if the operand is not a number, the unary plus converts it into a number.

// For example:
// // No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0


/* TYPEOF
Undefined = undefined
{ Null = object }
Boolean = boolean
Number = number
String = string
*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion