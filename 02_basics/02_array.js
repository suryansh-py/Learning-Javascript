const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   *array of dc in array of marvel*
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // Spread operator ...
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
 // .flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 // arr.flat(depth)
// depth → kitne level tak flatten karna hai (default is 1)
console.log(real_another_array); // for flat(1) [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


console.log(Array.isArray("Suryansh"))
console.log(Array.from("Suryansh"))
console.log(Array.from({name: "Suryansh"})) // {}

// Array.isArray() — Check If It's An Array
// Check karne ke liye ki koi variable array hai ya nahi.
// Array.isArray(value)
// Returns :
// true — agar value ek array hai
// false — otherwise

// Q: typeof [] kya deta hai? --> "object"
// To differentiate array from other objects: We use Array.isArray()

// Array.from() — Convert Array-Like or Iterable to Array
// Purpose:
// Converts Strings, Sets, Maps, NodeLists (DOM), Custom iterable/array-like objects into real JavaScript arrays.
// Syntax :
// Array.from(arrayLike, mapFn?, thisArg?)
// arrayLike: koi iterable or array-like object
// mapFn: optional — element transformation function
// thisArg: optional — context for mapFn

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

//Array.of(element0, element1, ..., elementN)
// Har argument directly element banta hai in new array.