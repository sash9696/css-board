//Declaration

// let message;

// //Initialize a variable

// message = "hello";

// let name = "John",
//   age = 25,
//   message = "hello";

// let name = 'John'
// let age = 25
// let message = 'hello'

// console.log(name, age, message);

// alert(message);
// console.log(message);

//old school
// var message = "hello";
// console.log(message);

// let hello = "hello world";

// // hello = "Hi";

// // console.log(hello);

// let message;

// message = hello;

// console.log(message);

//variable can only be declared once

// let name = "John";

// let name = "Peter";

// let username = "abc";
// let test123 = "abc";

// console.log(test123);

// let $ = 1;
// let _ = 2;

// console.log($, _);

// let 1a
// let my-name

//Reserved keywords

// let let = 5

// let return

// let function

// const myBirthday = "28/04/2022";

// myBirthday = "01/01/2021";

// //Uppercase constants

// const COLOR_RED = "#F00";

// const COLOR_GREEN = "#0F0";

//prototype based language

//Prototype

// let user = {
//   name: "John",
//   age: 20,
// };

// let num = [1, 2, 3, 4, 5];

// function x() {
//   console.log("hi");
// }
// x();

//Objects

//craeting an empty object
// let user = {}  // Object literal syntax

// let user = new Object(); //object constructor syntax

// let user = {
//   name: "John",
//   age: 20,
// };
// user.isAdmin = true;

// delete user.age;

// let user = {
//   name: "John",
//   age: 20,
//   "is lawyer": true,
// };
// //square notation

// user["is lawyer"];

// delete user["is lawyer"];

// function createUser(name) {
//   return {
//     // name: name,
//     // age: age,
//     name,
//     age: 40,
//   };
// }

// let user = createUser("John");

// let obj1 = {
//   name: "John",
//   age: 20,
// };

// let obj2 = {
//   name: "Peter",
//   age: 40,
// };

// obj1.__proto__ = obj2;

//in operator

// let user = { name: "John" };

// console.log("name" in user); //true

// let obj = { a: undefined };

// console.log("a" in obj);

//for in loop

// let user = {
//   name: "John",
//   age: 20,
//   isAdmin: true,
// };

// for (let key in user) {
//   //   console.log(key);
//   console.log(user[key]);
// }

//this keyword in object

// window.console.log("hello");
// console.log("hello");

// let user = {
//   name: "John",
//   age: 20,
// };
// user.sayHi = function () {
//   console.log(user.name);
// };
//A function that is a property of an object is called method

//To access an object a method can use this keyword

// let user = {
//   name: "John",
//   age: 20,

//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi();
// let user1 = user; //copying from the user

// user = null; //overwritten the previous user

// user1.sayHi();

//this is not bound

// function sayHi() {
//   console.log(this.name);
// }
// sayHi();

// let user = { name: "John" };
// let user1 = { name: "Peter" };

// function sayHi() {
//   console.log(this.name);
// }
// //using the same function in two objects

// user.f = sayHi;
// user1.f = sayHi;

// user.f();
// user1.f();

// function x() {
//   console.log(this);
// }
// x();

//Functions

//Function declaration

// x();
// function x() {
//   console.log("hello");
// }

//Function expression

//named function expression

// console.log(x);
// var x = function sayHi() {
//   console.log("hello");
// };

//unamed function expression
// console.log(x);
// var x = function () {
//   console.log("hello");
// };

//Anonymous Functions

// function x(sayHi) {
//   sayHi();
// }
// x(function () {
//   console.log("hello");
// });

//arrow Function

// var x = function (a, b) {
//   return a + b;
// };

//arrow function
// var x = (a, b) => a + b;

// console.log(x(10, 20));

//arrow functions do not have their own this keyword
//arrow functions are not suitable for call apply and bind methods

// let user = {
//   name: "John",

//   sayHi() {
//     let arrow = () => console.log(this.name);
//     arrow();
//   },
// };

// user.sayHi();
