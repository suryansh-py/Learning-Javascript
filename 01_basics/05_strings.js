const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  Not used in modern day

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is called String Interpolation, use backticks " ` " ${} ... This is modern way :)

const gameName = new String('hitesh-hc-com') // () is the String Constructor
console.log(typeof gameName); //object


// console.log(gameName[0]);        // access key-value pair of 0
// console.log(gameName.__proto__); (to see in browser)

// console.log(gameName.length);  // 8
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // t
// console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4) //last value wil not be included (only 0,1,2,3)
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4) //-ve values are allowed & last value not included
//  Extracts a section of string & returns it as a new string, without modifying the original string 
console.log(anotherString); // ite

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removes extra-whitespaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // divides the string into a ordered list of substrings, put these substrings into an array, and returns the array.
// The original string in not modified.