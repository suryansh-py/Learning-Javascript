// Dates #Unix Epoch - January 1,1970,UTC
// Months start from 0

// To create a new Date object call new Date() with one of the following arguments: new Date()
let myDate = new Date()
// console.log(myDate); //2025-07-20T16:54:23.683Z

let Jan01_1970 = new Date(0);
// 0 means 01.01.1970 UTC+0
// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
let Jan02_1970 = new Date(24 * 3600 * 1000);--
// now add 24 hours, get 02.01.1970 UTC+0

// console.log(myDate.toString()); // Sun Jul 20 2025 22:11:38 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sun Jul 20 2025
// console.log(myDate.toLocaleString()); // 20/7/2025, 10:13:02 pm
// console.log(typeof myDate); #object

let myCreatedDate = new Date(2025, 6, 20)
// console.log(myCreatedDate.toDateString()); // Sun Jul 20 2025

let myCreatedDate = new Date(2025, 6, 20, 22, 17)
// console.log(myCreatedDate.toLocaleString()); // 20/7/2025, 10:17:00 pm

//Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
//new Date(year, month, date, hours, minutes, seconds, ms)
//The year should have 4 digits.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.


let myCreatedDate = new Date("2025-07-20")
// console.log(myCreatedDate.toLocaleString()); //20/7/2025, 5:30:00 am

let myCreatedDate = new Date("07-20-2025") 
// console.log(myCreatedDate.toLocaleString()); //20/7/2025, 12:00:00 am

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1753031087974
// console.log(myCreatedDate.getTime()); //1752949800000
// console.log(Date.now()); //1753031271507
// console.log(Math.floor(Date.now()/1000)); //1753031308

let newDate = new Date()
// To Access date components
// There are methods to access the year, month and so on from the Date object:
// getFullYear() -- Get the year (4 digits)
// getMonth() -- Get the month, from 0 to 11.
// getDate() -- Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds() -- Get the corresponding time components.
// getDay() -- Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.
// All the methods above return the components relative to the local time zone.
console.log(newDate); //2025-07-20T17:17:44.390Z
console.log(newDate.getMonth() + 1); //7
console.log(newDate.getDay()); //0
console.log(newDate.getHours()); //22

// There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".
console.log(newDate.getUTCHours()); // 17
// the hour in UTC+0 time zone (London time without daylight savings)

//Besides the given methods, there are two special ones that do not have a UTC-variant:
//getTime() -- Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
// getTimezoneOffset() -- Returns the difference between UTC and the local time zone, in minutes:

// Setting date components
// The following methods allow to set date/time components:
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

// Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().
// As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.
// For instance:

let today = new Date();
today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.

// Autocorrection
// The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.

// For instance:

let date = new Date(2025, 6, 32); // 32 July 2025 ?!?
alert(date); // Fri Aug 01 2025 00:00:00 GMT+0530 (India Standard Time)

//Out-of-range date components are distributed automatically.

// Let’s say we need to increase the date “28 Feb 2016” by 2 days. It may be “2 Mar” or “1 Mar” in case of a leap-year. We don’t need to think about it. Just add 2 days. The Date object will do the rest:

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// alert( date ); // 1 Mar 2016
// That feature is often used to get the date after the given period of time. For instance, let’s get the date for “70 seconds after now”:


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

