// we have seen the for loop in action
// we can do the same thing with a while loop

/* const someNums = [1, 2, 3, 4, 5];

let i = 0;
while(i<someNums.length){
  console.log(someNums[i])
  i++
} */

// a while loop basically works the same way but you manually
// increment the count
// you could use this to do a brute force search easily

/* const searchable = [1, 2, 3, 4, -1, -2, -3, -4]
 */
// say we want to find -2, you could use a for loop
// but a while reads better

/* const toFind = -2;
let j = 0;
while(searchable[j] !== toFind){
console.log('iterating', j)
  j++
}
console.log(searchable[j]) */

// you can see we check the condition in the while
// AS LONG AS IT IS TRUE we will do the code block
// in this case as long as the item in the array at
// our iterator variable is not the number we want to find
// we will run the code block inside

// Can you spot the obvious issue with this type of loop?
// its possible in the for loop as well.
// what happens if your condition is never met?
// you get an infinite loop this way.
// in this case if our searchable array didn't have a -2
// we would loop forever and crash
// we can fix this by adding another condition

/* while(searchable[j] !== toFind && j < searchable.length){
  j++
} 
console.log(searchable[j]) */

// this reads
// while the searchable array at index j is not what we want
// AND j is less than the length
// do our code block

// this type of search is actually a good example of a simple search
// known as a linear search. It searches through an array one by one
// and stops when it finds its value.
// it is good because it can never take more than the array length
// number of iterations to find its value
// it is bad though because it does not take into account sorting of
// the array like other types of sort. but that is for another day
