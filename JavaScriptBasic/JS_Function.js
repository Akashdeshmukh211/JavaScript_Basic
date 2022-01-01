"use stric";
//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
//Function Declaration
function showMessage() {
  console.log("Hello World");
}
showMessage();
// /function name(parameter1, parameter2, ... parameterN) {
//     ...body...
//   }
let hW = "Hello World";
function showMessage2() {
  console.log(hW);
}
function Add(N, M) {
  return N + M; // retrun value
}
const sum = Add(4, 5);
console.log(sum);
//Local variables
sub(10, 8); // sub function can call it any where in mail code  befor declrear
function sub(N, M) {
  let st = "local Variables";
  console.log("Subtraction of number :- " + (N - M) + "  " + `${st}`);
}
// sub(10, 8);
//Default values
function squrOf2(N, M = 2) {
  return N ** M;
}
console.log(squrOf2(4));

//Function Expression
// Here we immediately assign it to the variable, so
//  the meaning of these code samples is the same:
// "create a function and put it into the variable"
//sayHi(); // we cant call function expression befor implimation
let sayHi = function () {
  console.log("HII everyone");
};
sayHi();
let sumOfValue = function (a, b) {
  return a + b;
};
console.log(sumOfValue(7, 7));
// /Function Expression vs Function Declaration

///Function Declaration: a function, declared as a separate statement, in the main code flow.
// Function Expression: a function, created inside an expression or inside another syntax construct.
// Here, the function is created at the right side of the “assignment expression” =:
//

///Arrow functions
//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// It’s called “arrow functions”, because it looks like this:
//let func = (arg1, arg2, ..., argN) => expression;

let SumOfTwo = (a, b) => a + b;
console.log(SumOfTwo(4, 9));

let sum2 = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
console.log(sum2(8, 9));
