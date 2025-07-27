// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// 🔥 Array Iteration Methods (map, forEach, filter, reduce, some, every, find)
// 1. map()
// Purpose: Array ke har element ko transform karke naya array return karta hai.
// Return: New array.
// Best use: Jab aapko existing array ke elements modify kar ke naya array chahiye.

// const nums = [1, 2, 3];
// const squares = nums.map(num => num * num);
// console.log(squares); // [1, 4, 9]

// 2. filter()
// Purpose: Array ke elements ko filter karke naya array return karta hai jo condition pass karte hain.
// Return: New array (filtered elements).

// const nums = [10, 20, 30, 40];
// const above20 = nums.filter(num => num > 20);
// console.log(above20); // [30, 40]

// 3. reduce()
// Purpose: Array ke sabhi elements ko ek single value me reduce karta hai.
// Return: Single value (number, string, object etc.)
// Best use: Sum, product, or aggregations.

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 10

// Behind the scenes:
// acc = 0 (initial value)
// Step 1: acc + 1 = 1
// Step 2: acc + 2 = 3
// Step 3: acc + 3 = 6
// Step 4: acc + 4 = 10

// 4. some()
// Purpose: Check karta hai ki koi ek element condition pass kar raha hai ya nahi.
// Return: Boolean (true/false).
// Example:
// const nums = [1, 3, 5, 7];
// const hasEven = nums.some(num => num % 2 === 0);
// console.log(hasEven); // false

// 5. every()
// Purpose: Check karta hai ki sabhi elements condition pass karte hain ya nahi.
// Return: Boolean (true/false).
// Example:
// const nums = [2, 4, 6];
// const allEven = nums.every(num => num % 2 === 0);
// console.log(allEven); // true

// 6.  find()
// Purpose: Pehla element jo condition pass kare usko return karta hai.
// Return: Element (ya undefined agar koi match nahi kare).
// Example:
// const nums = [5, 12, 8, 130];
// const firstAbove10 = nums.find(num => num > 10);
// console.log(firstAbove10); // 12




// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }