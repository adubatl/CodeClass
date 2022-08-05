// WTF is Programming

// Programming is writing a set of instructions for your computer to execute

// formerly programmers literally wrote ones and zeroes and passed this directly to the processor
// to be interpreted

// Imagine programming your favorite modern videogame with only ones and zeroes

// after a while they got crafty and using a bunch of fancy math and pattern recognition
// wrote things that would COMPILE some human readable code, into machine code(binary)

// this was the first step in programming becoming versatile IMO

// now instead of an insane amount of ones and zeroes you could write human readable things
// and collaborate with your team exponentially faster.

// When you write a language like C you write code to be compiled
// it is pre processed to remove comments and any language specific short cuts
// it is then compiled into assembly language which is like a half way point between
// easily human readable, and easily processor readable
// THEN it gets compiled into machine language/binary for the processor to handle

// Javascript is an interpreted language
// this means its job is to be interpreted by an intermediary that will
// pass that instruction on to the processor. Javascripts intermediary is
// whatever engine the browser uses to interpret it.

// Useful knowledge before we start

// we will be using some built in functions to view our work as we go
// the console in js is where all the messages the code we write go
// if we dont tell our code to print there, the code still runs, but we dont
// see it.

// we will use console.log() to let our code know we wanna see the output
// console.log() is a function that takes whatever you give it and trys to turn it
// into a string
// console.log('this is some crazy stuff man im confused')
// will print 'this is some crazy stuff man im confused'
// similarly
// console.log(someVariable)
// will print out the value of the variable we name someVariable
// notice we have no quotes around this, as quotes denote a string, more on that later
