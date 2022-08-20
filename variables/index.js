//javascript is a synchronous single threaded language
//synchronous -> line by line
//single threaded -> in a specific order top to bottom

//let const and var

// var message;
// message = 'hello'

//1 phase -> memory creation phase or variable environment
//It assigns memory to all the variable, parameters, functions
//2 phase code execution phase or thread of execution

//Phase 1
// in case of variables it assigns undefined in the memory
//message = undefined  age = undefined
// in case of function it copies the whole function and stores it in a memory

//Phase 2
//message ='hello
//age = 20
//hello
//20

// console.log(message);
// x()
// var message = "hello";
// var age = 20;

// function x() {}

// console.log(age);

//Hoisting in javascript

//let and const are stored in a separate memory space temporal dead zone

// console.log(a);
// let a = "hello";

// const b = "hi";

//2 difference

// var message = "hello";
// console.log(message);

// {
//   var message = "hi everyone";
//   console.log(message);
// }

// var message = "hello";
// console.log(message);
// message = "hi everyone";
// console.log(message);

//2nd difference
//var is a function scope
//let and const are blocked scope

// let a = 10;

// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a);

// var a = 10;

// function x() {
//   var a = 20;
//   console.log(a);
// }
// x();
// console.log(a);

// var a = 10;

// {
//   var a = 20;
//   console.log(a);
// }

// console.log(a);

//3rd diff

//var variables can be redeclared and let and const cannot be redeclare

// var a = 10;

// var a = 20;

// console.log(a);

// let b = 30
// let b = 10

//4 diff var and let variable can be reinitialized and const cannot
// const a = 10;
// a = 20;
// console.log(a);

//hexadecimal colors

// const COLOR_RED = "#F00";
// console.log(COLOR_RED);

//Never use RESERVED NAMES BY JAVASCRIPT
//cannot start with digits

// let 1a

// let my-name

// let $ = 1;
// let _ = 20;

//Data Types
// 8 types
//number, string, object, symbol, boolean, null, undefined, bigInt

//dynamically typed or loosely typed language

// let message =  'hello'
// message = 10

// console.log(message)

//Number

// let n =123 //integer
// n = 12.234  //float

//Specific special numeric values in this data type
//Infinity

// console.log(1 / 0);
//NaN
// console.log("abc" / 2);
// console.log('abc'-3)

//one exception

// console.log(NaN ** 0);

//BigInt
//2power53 -1 to - (2power53 -1)

// const bigInt =
//   3128123123721783817263867123681236312863186386182612874238743287482378n;

// console.log(bigInt);

//Strings

// let str = "hello"
// let str = 'hello'

// Double quotes // Single quotes are simple

// Backticks are extended functionality

// let str = `hello`;
// console.log(str);

let name = "John";
let age = 30;

// console.log("Hello " + name + " " + age); old schools

//string interpolation

// console.log(`Hello, ${name} ${age}`);

console.log(`the result is ${1 + 2}`);
