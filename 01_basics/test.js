//alert
//This one we’ve seen already. It shows a message and waits for the user to press “OK”.
//For example:
alert("Hello");

//prompt
//The function prompt accepts two arguments:
result = prompt(title, //default);
//It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

//title
//The text to show the visitor.

//default
//An optional second parameter, the initial value for the input field.
//The square brackets in syntax [...] The square brackets around default in the syntax above denote that the parameter is optional, not required

//confirm
result = confirm(question);
//The function confirm shows a modal window with a question and two buttons: OK and Cancel.
//The result is true if OK is pressed and false otherwise.
//For example:

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed