// so far we have been programming with statements
// individual lines or wrapped lines that do one specfic thing
// often times we need to do more than one thing, or do one thing
// in many different places

// In most development, functions or methods are
// bits of code that do whatever their name says they do
// ideally. Breaking your code up into smaller functions
// that do exactly what they say, makes writing larger
// programs or doing complicated things a lot easier

// In Javascript functions first-class
// this means they can be assigned to variables like other
// types of data

// lets say we want to add something before and after a string
// Strings can be added together like numbers
// so 'string ' + 'second string' will be
// string second string
// our task sounds EASY right?
// make some strings, add some stuff before and after

/* let stringyBoi = 'test';
let stringierBoi = 'another test'
let stringiestBoi = 'the final test'

stringyBoi = 'something before ' + stringyBoi + ' something after';
stringierBoi = 'something before ' + stringierBoi + ' something after';
stringiestBoi = 'something before ' + stringiestBoi + ' something after';
console.log(stringyBoi, stringierBoi, stringiestBoi) */

// thats not very hard. we can type a few lines over and over
// or even copy and paste and get there. but its harder to read
// and not DRY.

// DRY, or Do not Repeat Yourself, is a prinicple in most language
// where it is considered bad practice to type the same code a bunch
// if that code is reuseable, you should wrap its logic up in a function
// so that it can be reused without typing the same thing over and over
// again. If you do a good job naming your function, you, or the person
// using your code later, wont have to know what the function does,
// they can assume from the name.

// ENCAPSULATION is the process of turning some code into a
// function to be reused. ABSTRACTION is the hiding of the
// details of the code by encapsulating the code into a function.

// we are by default abstracting when we encapsulate
// some of that complexity away. If you want to wrap a string, you dont
// NEED to know whats going on, just that you put in string, and out comes
// a wrapped string.

// lets make that bit from earlier into a function
// there are many ways to declare a function in JS this is my
// preferred way. Its called an arrow or big arrow function. sometimes
// referred to as a hipster function
// the => can be read out loud as "yields"
// so below we are saying we have a constant stringWrapper
// which is a function, that takes in one argument called str
// and yields whatever we do between the { }

// function strinWrap(toBeWrapped){
//
// }

/* const stringWrapper = (stringToBeWrapped) => {
  // as many things can happen here as you want
  return 'something before ' + stringToBeWrapped + ' something after';
} */

// functions like this will often return something
// that means you put in the arg or args, and get back a new thing

// lets revisit our code from before

/* let stringyBoi = 'test';
 let stringierBoi = 'another test'
 let stringiestBoi = 'the final test' */

// stringyBoi = 'something before ' + stringyBoi + 'something after';
// stringierBoi = 'something before ' + stringierBoi + 'something after';
// stringiestBoi = 'something before ' + stringiestBoi + 'something after';

// we can now write the last three lines as

/* stringyBoi = stringWrapper(stringyBoi)
stringierBoi = stringWrapper(stringierBoi)
stringiestBoi = stringWrapper(stringiestBoi)

console.log(stringyBoi, stringierBoi, stringiestBoi) */

/* const wrappedGuy = stringWrapper('guy')
console.log(wrappedGuy) */

/* const arr = [1, 2, 3, 4, 5]
const mult = (val) => {
  return val*2;
}
const newArr = arr.map((val)=>{
  return mult(val);
})
console.log(newArr) */
