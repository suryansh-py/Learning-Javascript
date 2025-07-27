// 1. Types of Loops
// JavaScript me sabse common 6 types ke loops hote hain:
// for loop
// while loop
// do...while loop
// for...in loop
// for...of loop
// forEach() method (Array specific)


// 1. for loop
//      for (initialization; condition; increment/decrement) {
//        code block
//      }

// 2. while loop                ( Jab tak condition true hai tab tak loop chalega)
//      while (condition) {
//      code block
//      }

// 3. do...while loop           (do...while me code pehle run hota hai, fir condition check hoti hai.)
//      do {
//         code block
//      } while (condition);

// 4. for...in loop (Objects ke liye)
// Object ke keys (properties) iterate karne ke liye use hota hai.

// const user = { name: "Suryansh", age: 22, country: "India" };
// for (let key in user) {
//   console.log(key, ":", user[key]);
// }
// Output
// name : Suryansh
// age : 22
// country : India

// 5. for...of loop (Iterables ke liye)
// Arrays, Strings, Maps, Sets iterate karne ke liye use hota hai.

// const arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value);
// }
// Output: 10 20 30

// 6. forEach() (Array Method)
// forEach() array ke har element ke liye ek callback run karta hai.
// Note: break or continue use nahi kar sakte.

// const nums = [1, 2, 3];
// nums.forEach((num, index) => {
//   console.log(`Index ${index} = ${num}`);
// });

// 7. break and continue
// break:
// Loop ko poora stop kar deta hai.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }
// Output: 1 2

// continue:
// Current iteration ko skip karta hai.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// Output: 1 2 4 5



// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}