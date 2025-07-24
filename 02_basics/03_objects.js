// To declare objects, we have 2 ways : as Literal or as Constructor
// when we create a Constructor, we get a singleton object
// Note : Jb vi hm Literals ki trh declare krte h toh Singleton nhi bnta hai, constructor se hmesha Singleton bnega

// Object.create   #Constructor Method


// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Suryansh",
    "full name": "Suryansh Yadav",
    [mySym]: "mykey1",
    age: 22,
    location: "Noida",
    email: "suryansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ways to access keys(properties) : .property or ["property"]

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  *to access as a symbol, write key name in [ ]

JsUser.email = "Suryansh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Suryansh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //# "this" helps referencing same object
}
// console.log(JsUser.greeting);  #we get a fn return type, fn didn't execute we only got the reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());