const accountId = 144553
let accountEmail = "suryansh@google.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState;

//LOG + ENTER = console.log
// [ Setting up environment ] 
// 1 The difference between .js and .txt file is that .js file can be run
// 2 Environment Node js/ deno js (in past html was needed but not now)

// [ Git hub ] 
// Explore Github CodeSpaces
// ctrl  + shft + p add dev configuration file

// [ let var const ]
// 1 variable declaring best practices 
// 2 const variable can't be modified 
// 3 console.table
// 4 js used to not work on scope (var is Global Scope & Let is Block Scoped)
// 5 prefer not use var
// 6 variable with out initializing is undefined

// accountId = 2 // not allowed

// RULES FOR NAMING VARIABLES
// 1. Cannot start with number
// 2. Cannot use reserved keywords (like var, let, const, function, etc.)
// 3. Can use letters, numbers, underscore, and dollar($) sign
// 4. Case sensitive (accountId and accountid are different)
accountState = "Karnataka"
// accountId = 2 // not allowed, const variable can't be modified

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])