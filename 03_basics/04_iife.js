// Immediately Invoked Function Expressions (IIFE)
// IIFE ek function expression hai jo turant execute hota hai, bina usko call kiye.
// Iska syntax function ke around parentheses () lagane se banta hai, aur turant ek pair of () se call hota hai.
// Why Use IIFE?
// A) Avoid Global Scope Pollution
// IIFE ek private scope banata hai, taaki variables global scope me leak na kare.
// B) Module Pattern / Data Privacy

// Variations of IIFE
// !function(){ console.log("Using !"); }();
// +function(){ console.log("Using +"); }();
// ~function(){ console.log("Using ~"); }();
// Ye !, +, ~ function ko expression me convert kar dete hain.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})()       // to make a iife , just insert parenthesis at starting & end of function       (
//                                                                                              )()

// First () → function ko expression banata hai.
// Second () → function ko immediately call kar deta hai.

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('SURYANSH')

// To execute this block of code, we need add ; after the last iife (bcz iife doesnt know where to stop the context)