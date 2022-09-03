//splice

//swiss knife of arrays insert, remove, replace
//arr.splice(start, deleteCount, element1, element2)

// let arr = [1, 2, 3];

// // delete arr[1];
// arr.splice(1, 1); //from index 1 remove 1 element

// console.log(arr);

// let obj = {
//   name: "John",
//   age: 20,
// };
// delete obj.name;
// console.log(obj);

//arr.splice(start, deleteCount, element1, element2)

// let arr = ["We", "study", "Javascript"];

// //remove first 3 elements, replace them with another
// // console.log(arr.splice(0, 3, "Let's", "dance"));

// // console.log(arr);

// arr.splice(2, 0, "complex", "language");

// console.log(arr);

// let arr = [1, 2, 5];

// arr.splice(-1, 0, 3, 4);

// console.log(arr);

//slice
//arr.slice(start, end)

//returns a new array with items from index
//start to end (but not including end)

// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.slice;
// let arr1 = [...arr];
// arr.length = 0;

// console.log(arr1);

// console.log(arr.slice(1, 3));

// console.log(arr);

// console.log(arr.slice(-2));

//Rest parameters and spread operator
//...

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2, 3, 4, 5));

// function sumAll(...args) {
//   //   console.log("args", args);
//   let sum = 0;

//   for (let arg of args) {
//     sum = sum + arg;
//   }
//   return sum;
// }

// console.log(sumAll(1, 2));
// console.log(sumAll(1));
// console.log(sumAll(1, 2, 3));

// function x(a,b,...args) {
//   console.log(args);
//   console.log(a + b);
// }
// x(1, 2, 3, 4);

//spread

// let arr = [1, 3, 5];

// let arr1 = [6, 7, 8];

// console.log(...arr);
// // console.log(Math.max(arr[0], arr[1], arr[2]));

// console.log(Math.max(...arr));

// you can merge the arrays

// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// let combined = [...arr1, ...arr2];

// console.log(combined);

//important methods or highr order functions of arrays,
//map , filter, reduce

//map => transform an array

// let arr = [1, 2, 3, 4, 5];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// const result = arr.map(triple);
// console.log(result);

// const result = arr.map((x) => x * 3);
// console.log(result);

//filter

// const arr = [2, 3, 4, 5, 6, 7, 8];

//filter odd values

// function isEven(x) {
//   return x % 2 === 0;
// }

// function greaterThan4(x) {
//   return x > 4;
// }

// const result = arr.filter((x) => x < 4);
// console.log(result);

//reduce
//sum  // max

// let arr = [1, 2, 3, 4, 5];
// function sumAll(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sumAll(arr));

// const result = arr.reduce(function (acc, curr) {
//   acc = acc + curr;

//   return acc;
// }, 0);

// console.log(result);

let arr = [1, 2, 3, 4, 5];

function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const result = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(result);
