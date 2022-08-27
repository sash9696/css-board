// console.log("hi");
// var a = "hello";
// function x() {
//   var message = "greetings";
//   console.log(message);
// }

// x();

// console.log("bye");

// console.log("hi");

// setTimeout(function () {
//   console.log("greetings");
// }, 10000);

// //1000 lines of code

// console.log("bye");

// var a = 20;

// function x() {
//   console.log(a);

//   function y() {
//     var b = 10;

//     console.log(b);
//   }

//   y();
// }

// x();

// console.log("hi");

// setTimeout(function () {
//   console.log("greetings");
// }, 2000);

// console.log("bye"); // 5 secs

function x() {
  var b = 20;

  function y() {
    console.log(b);
  }
  return y;
}
x();
