// Strings are indexed
// 'Hello World'[1] //e

// String has Property & Methods
// Property --> length
// Methods(without Argument) --> toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd()
// Methods(with Argument) --> includes(), indexOf(), replace(), replaceAll(), concat(), padStart(), padEnd(), charAt(), charCodeAt(), split()

// These methods don't actually modify the String , it just gives a new result & we can save that new result in a variable

const name = "Suryansh"
const repoCount = 50
// console.log(name + repoCount + " Value");  Not used in modern day

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is called String Interpolation, use backticks " ` " ${} ... This is modern way :)


const gameName = new String('Riot-Valorant') // () is the String Constructor
console.log(typeof gameName); //object
// console.log(gameName[0]);        // access key-value pair of 0 - R
// console.log(gameName.__proto__); // {} (to see in browser)
// console.log(gameName.length);  // 13
// console.log(gameName.toUpperCase()); // RIOT-VALORANT
// console.log(gameName.charAt(2)); // o
// console.log(gameName.indexOf('t')); // 3

const newString = gameName.substring(0, 4) //last value wil not be included (only 0,1,2,3)
console.log(newString); // Riot

const anotherString = gameName.slice(-10) //-ve values are allowed & last value not included
//  Extracts a section of string & returns it as a new string, without modifying the original string 
console.log(anotherString); // t-Valorant
// Example-2
const teesraString = gameName.slice(3) //position 3 to end
console.log(teesraString); // t-Valorant
// Example-3
const fourthString = gameName.slice(-1) //Only the last character:
console.log(fourthString);



const newStringOne = "   Suryansh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removes extra-whitespaces

const url = "https://github.com/suryansh-py"
console.log(url.replace('py', 'yadav'))
console.log(url.includes('xyz')) //false

console.log(gameName.split('-')); // divides the string into a ordered list of substrings, put these substrings into an array, and returns the array.
// The original string in not modified.