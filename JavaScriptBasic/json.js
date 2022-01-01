"use strict";
//JSON.stringify
//JSON.stringify to convert objects into JSON.

// /JSON supports following data types:
// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.
let student = {
  name: "Akash",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};
let json = JSON.stringify(student);
console.log(json, typeof json); // object convert into json format
let courses = ["html", "css", "js"];
let arrjson = JSON.stringify(courses);
console.log(arrjson);
//some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:

// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.

// JSON.parse to convert JSON back into an object.
// let value = JSON.parse(str, [reviver]);
// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers); // 1

///Rest parameters and spread syntax
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5));
function sumall(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumall(1, 2, 3, 4, 5));

//Spread syntax
//We’ve just seen how to get an array from the list of parameters.

// But sometimes we need to do exactly the reverse
let str = "Hello";

console.log([...str].reverse().join("")); // H,e,l,l,o
let num = 1729879387409123;
// console.log([...num]);

// Copy an array/object
let array1 = [27, 43, 6, 4, 43, 6, 3];
let arrcopy = [...array1];
console.log(arrcopy);
let objo = { a: 1, b: 2, c: 3 };

let objCopy = { ...objo }; // spread the object into a list of parameters
// then return the result in a new object
console.log(objCopy);

// Scheduling: setTimeout and setInterval
//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayhello(name, age) {
  console.log(`sayhii ${name} ${age}`);
}
setTimeout(sayhello, 1000, "akash", 26);
