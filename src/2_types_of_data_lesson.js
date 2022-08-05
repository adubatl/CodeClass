// We have talked about declaring, assigning, and
// initializing variables. Lets move on to the
// types of data you can store

// The most basic types of data are numbers
// and strings.

/* const aRandomString = 'ThIs Is A sTrInG console.log(what)';
const aRandomNumber = Math.random(1, 100)*100;
console.log(aRandomString, typeof aRandomString)
console.log(aRandomNumber, typeof aRandomNumber) */

// while learning we can use the typeof to see
// what type the variable is
// in practice its not rarely used and is often
// a sign you are doing something wrong if you
// dont know what the type of a variable is

// Javascript is loosely typed. so rather than
// declare our variables as a type of variable
// we just declare them as a value and must recall
// what type we made as we go along to prevent us
// from changing a variable type
/* var slicesOfPizzaLeft = 4;
slicesOfPizzaLeft = 'turtle' */

// while you can do this, you can probably imagine
// how much harder your code is to read and update
// if you go changing the types all the time

// another commmon type is the boolean. the true
// or false type of data

/* const isThisFun = true;
console.log(isThisFun, typeof isThisFun)
// or 
const twoGreaterOne = 2 > 1; //true
console.log(twoGreaterOne, typeof twoGreaterOne) */

// booleans are used to create branches in code
// sometimes you need this but branching too much
// can make the code hard to read.
// a good example is a loading page
// if a page is loading, show a loading page
// else show the content of the page

// We can also store data in a list. in JS this
// is called an array

/* const aRandomList = [50, 60, 70, 80];
console.log(aRandomList, typeof aRandomList) */

// the above code initializes an array called
// aRandomList and says its values are 1, 2, 3, 4
// you declare an array by wrapping a list of other
// values in [] square brackets and separating them
// with commas

// to access values in our array
// we use an index

/* console.log(aRandomList[1]) */

// we want the 1th element in this array. I say 1th instead of
// 1st because arrays are 0-indexed in javascript and many
//other languages this means the first item in the list
// is at index 0, the next item is at 1 etc

// another common type of data is an object
// you can think of this as a box of vars

const aPersonLikeObject = {
  firstName: "Don",
  lastName: "Cheadle",
  age: 45,
  isAlive: true,
  movies: ["movie title", "movie title two", "movie"],
  father: {
    firstName: "Papa",
    lastName: "Cheeds",
    age: 75,
    isAlive: true,
  },
  mother: {
    firstName: "Momma",
    lastName: "Cheeds",
    age: 76,
    isAlive: false,
  },
};

console.log(aPersonLikeObject, typeof aPersonLikeObject);

// this creates aPersonLikeObject and gives it key-value
// pairs to store information
// the first key is firstName, the value is the string 'Don'
// you declare one by wrapping a bunch of key value pairs
// in {} curly braces and separating the values by commas
// you can access each bit of data off them by name

/* console.log(aPersonLikeObject.firstName);
  const nameKey = 'firstName';
  console.log(aPersonLikeObject['firstName']);
  console.log(aPersonLikeObject[nameKey]); */

// each key on the object can have all kinds of values
// you can see in the person example we store, strings,
// numbers, booleans, an array, and even another object

// these are just the most common data types, there are many more
// and more complicated ways to use them but this is a good place
// to start

/* const aRandomNumber = Math.random(2, 100)*10000;
  console.log(aRandomNumber) */
