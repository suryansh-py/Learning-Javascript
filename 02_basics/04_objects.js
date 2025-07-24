// Constuctor Method (Singleton)
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// Optional Chaining : if fullname doesn;t exist like from an API response, then ? gives us protection
// console.log(regularUser.fullname?.userfullname.firstname);


// Combining Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
//  const obj3 = Object.assign(obj1, obj2, obj4)

// # Object.assign() — Object Copy & Merge
// Syntax :
// Object.assign(target, ...sources)
//  Note: target mutate hota hai. Agar mutation nahi chahiye, empty object do: {}
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// Usecase :
// Shallow Copy (Clone Object), Merge Multiple Objects, Override Properties (Left → Right)
// Other :
// Deep clone ke liye: structuredClone(obj) (new), or JSON method.

const obj3 = {...obj1, ...obj2} //Spread Operator
// console.log(obj3);

// ----------------------------------------------------------------------------------------------------------------
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Object ke sabhi keys (property names) ko array me return karta hai. //Use Case: Loop karna sirf keys ke through.
// console.log(Object.values(tinderUser)); // Object ke sabhi values ko array me return karta hai. //Use Case: Jab sirf values chahiye ho (for analytics, charts, etc).
// console.log(Object.entries(tinderUser)); // Object ko [key, value] pairs ke 2D array me convert karta hai. //Use Case: Key & Value dono ka access chahiye ek hi loop me:

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Ye method check karta hai ki kya kisi object ke paas
//  koi property directly hai ya nahi — inherited property nahi honi chahiye.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor

// Object Destructuring
const {courseInstructor: instructor} = course 

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



// Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// // Displaying the Object Properties in a Loop ::: (let text = ""; for (let x in person) {text += person[x] + " ";};)
// Displaying the Object using Object.values() ::: creates an array from the property values 
// Object.entries() ::: makes it simple to use objects in loops:
// Displaying the Object using JSON.stringify()
