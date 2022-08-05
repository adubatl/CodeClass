// First lets talk about storing values

// To start coding you gotta know about storing values
// There are many ways to do this in JS

// there are two parts of creating variables
// declaring and assigning

// we declare a variable with a variable type and a variable name
// for example

// var someNameHere = 1;
// that is a variable of type var with the name some name here
// assigning is giving that variable a piece of data to hold on to
// we say you initialize a variable when you combine those two steps

// the most common type of variable in modern javascript is
// the const.

/* const theLastVariable = 1;
console.log('initialize theLastVariable', theLastVariable)
theLastVariable = 2; */

// in the above code we DECLARE a const called theLastVariable
// and ASSIGN it a value in one line
// this is called INITIALIZING a variable
// we create a named thing(declare) and give it a value(assign)

// In this example, we say "theLastVariable" is a const
// so we do not intend for its value to change.
// if we attempt to change it, we get a warning
// in the console telling us not to do it

// another type of declaration is using let

/* let anotherVariable;
console.log('declare anotherVariable', anotherVariable)
anotherVariable = 10;
console.log('reassign', anotherVariable) */

// here we don't give "anotherVariable" any value
// we are simply saying that we will want to have a
// variable but dont have anything to store in it yet.
// a "let" is most commonly used when you know you will
// change the value of something later

// in JS we use var when we might change the variable
// or we might not.

/* var someVariable = 10;
console.log('initialize', someVariable)
someVariable = 15;
console.log('reassign',someVariable) */
