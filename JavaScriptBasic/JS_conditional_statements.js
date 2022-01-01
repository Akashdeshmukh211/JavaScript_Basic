"use strict";
let ab = true;
let bc = false;
let cd = false;
//if...else condition which are used to perform different actions based on different conditions
if (ab) {
  console.log("ab value is true so we print this");
}
if (bc) {
  console.log("bc value is not true ");
} else {
  console.log("bc value is false ");
}
if (bc) {
  console.log("bc value is not true ");
} else if (cd) {
  console.log("ab value is true");
} else {
  console.log("if both value is false it print");
}
//Switch Statements switch statement which handles exactly this situation
// switch (expression) {
//     case condition 1: statement(s)
//     break;

//     case condition 2: statement(s)
//     break;
//     ...

//     case condition n: statement(s)
//     break;

//     default: statement(s)
//  }

let st = "a";
let sd = false;

switch (st) {
  case "a":
    console.log("90% out of 100");
    break;
  case "b":
    console.log("80% out of 100 ");
    break;
  case "c":
    console.log("80% out of 100 ");
    break;
  default:
    console.log("your fail in exam");
}
// JavaScript supports all the necessary loops to ease down the pressure of programming

//The while Loop
// while (expression) {
//     Statement(s) to be executed if expression is true
// }
var w = 4;
while (w < 5) {
  console.log(`value of ${w}`);
  w++;
}
//do while loop
do {
  console.log(`value of ${w}`);
  w++;
} while (w < 10);

//For Loop
// for (initialization; test condition; iteration statement) {
//     Statement(s) to be executed if test condition is true
//  }

for (var i = 0; i <= 4; i++) {
  console.log(`for loop value of ${i}`);
}
