// In that last example you might have realized its a little
// tedious to set a bunch of items in arrays, even with a function

// FORtunately, we can use loops to go over them.

// lets write a function that will take in an array of numbers
// and multiply them by 2

// first lets do another helper function

const byTwo = (num) => {
  return num * 2;
};

// now lets make a number array

const someNums = [1, 2, 3, 4, 5];

// now we will use the power of loops to do this fast

// first make a function that takes an arra

const arrayByTwo = (arr) => {
  // lets set up the start and end of the loop
  let index = 0;
  // you can get the length of the array this way
  // note it will be one more than the actu
  let end = arr.length;

  // array to store our new values
  let result = [];

  // now we loop using a for loop
  // read this as
  // for the index, while its is less than the end
  // do the content of the loop then ++ is add one
  // to the index
  // for(iterator, while condition, action)
  for (index; index < end; index++) {
    // assign the result array at index i
    // to the array at the same index times 2
    result[index] = byTwo(arr[index]);
    // console.log({index, end, result})
  }
  // return the result array
  return result;
};

console.log(arrayByTwo(someNums));

/* const arrayByTwo = (arr) => {
     let result = [];
  
     // another way to write the same code is as follow
     for(let i = 0; i < arr.length; i++){
      console.log('setting result at ' + i + ' to input * 2')
      result[i] = arr[i] * 2
     }
     return result;
}

const modifiedArray = arrayByTwo(someNums)
  console.log(modifiedArray) */

// a for loop works by using a counter that increments each iteration
// in this case we said
// index is 0
// while index is less than the length of the array
// do some code
// then once were done doing code
// increase our counter
// this causes us do one operation per index of the array
// since we know arrays start at 0 and can get the length from them
// we can do an operation on every single item in the array with way
// less code

// three lines of code to do n(array length) numbers of things!
// thats amazing!
