// Dates #Unix Epoch - January 1,1970,UTC
// Months start from 0

let myDate = new Date()
// console.log(myDate.toString()); // Sun Jul 20 2025 22:11:38 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sun Jul 20 2025
// console.log(myDate.toLocaleString()); // 20/7/2025, 10:13:02 pm
// console.log(typeof myDate); #object

let myCreatedDate = new Date(2025, 6, 20)
console.log(myCreatedDate.toDateString()); // Sun Jul 20 2025

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

