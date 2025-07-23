// array
// Javascript array-copy operations create Shallow Copies rather than Deep Copies
// Shallow Copy: a copy of an object whose properties share the same reference point (if u change either the source or the copy, you may also cause other object to change)
// Deep Copy : a copy of an object whose properties do not share the same reference point .(if u change either the source or the copy, u can be assured that u are not causing the other objects to change) 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  #add value in the start
// myArr.shift()  #shift

// console.log(myArr.includes(9));   #boolean
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  #adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log( newArr);


// slice, splice Interview QnA
// slice() : Extracts a section of an array & returns a new array containing the extracted elements. The original array remains unchanged. (a snapshot of the array)
// Return Value : a new array containing the extracted elements.

// splice() : Changes the contents of an array by removing or replacing existing elements &or adding new elements in place. It modifies the original array. (surgeon operating on array)
// Return Value : an array containing the deleted elements. If no elements are deleted, an empty array is returned.
// array.splice(start, deleteCount, item1, item2, ...)

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);


console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// slice() — Copy karta hai (Non-destructive)
//slice(start, end) → Returns a new array from index start to end - 1.
// Original array ko change nahi karta
// Negative index support karta hai
// Mostly copy banane ke liye use hota hai

// splice() — Cut & Paste karta hai (Destructive)
//splice(start, deleteCount, item1, item2, ...)
// Original array ko change karta hai
// Delete bhi karta hai, insert bhi karta hai
// Return karta hai: deleted elements ka array


