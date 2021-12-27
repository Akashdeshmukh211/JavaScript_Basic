//JavaScript Datatypes three primitive data types
// 1) Numbers, eg. 123, 120.50 etc.

// 2 ) Strings of text e.g. "This text string" etc.

// 3 ) Boolean e.g. true or false.

let num2 = 2; //integer data type
var num1 = 2.5; //float data type
let _String = "Hello World"; //String data type
let j = true; //Boolean data type
//Variable Scope
let num = 8; // Globle scope Variable
function localvariable() {
  let num4 = 7;
  console.log(num); //we can accecss the globle variable inside a block function
  console.log(num4);
}
console.log(num); // globle scope variable
console.log(localvariable()); //Local scope variable
//console.log(num4); //we con not accecess local variable outsite of function block

//Operator in Javascript
// 1) Arithmetic Operators
//  2)Comparison Operators
//   3) Logical (or Relational) Operators
//    4) Assignment Operators
//   5)Conditional (or ternary) Operatorsp

//Arithmetic Operators
//Addition
console.log(num + num1);
//Subtraction
console.log(num - num1);
//multipication
console.log(num * num1);
//division
console.log(num / num1); //it give the division value
//Modules
console.log(num % num1); //it give the remender value
//increment
console.log(num++); //Increases a value by one
//Decrement
console.log(num--); //Decrement a value by one

//Comparison Operators
let x = 5;
let y = 5;
let z = 6;
//Equal
console.log(x == y); //it send boolean output true and false
console.log(x == z);
//Not Equal
console.log(x != y);
console.log(x != z);
//Greater than
console.log(z < x);
console.log(x < z);
console.log(x < y);
//Less than
console.log(x < y);
console.log(x < z);
//Greater than or Equal to
console.log(x >= y);
console.log(z >= x);
console.log(x >= z);
//less than or Equal to
console.log(x <= y);
console.log(z <= x);
console.log(x <= z);

//Logical Operators
let a = true;
let b = false;
let c = true;
let d = false;

//&& (Logical AND) if the both value is true output is trur

console.log(a && c); //both the value or condition are true output true
console.log(a && b); //value or condition of b is fales therefor output is false value
console.log(b && d); //both the value or condition is false output is false value

//	|| (Logical OR) if any value or condition is true the output is true
console.log(a || c); //both the value or condition are true output true
console.log(a || b); //a is the true and b is false the output is true value
console.log(b || d); //b and d are false value or condition output false

//! (Logical NOT) Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.
console.log(!a);
console.log(!b);

//Assignment Operators
// '=' (Simple Assignment )
var q = 5; // Assing 5 to q variable

//Miscellaneous Operator
//Conditional operator (? :) If Condition is true? Then value X : Otherwise value Y
let r = true;
r
  ? console.log(`value of r ${r} is true`)
  : console.log(`value of r ${r} is not true`);
var s = 5;
q = s ? console.log(`q is greter than s`) : console.log("both value equal");
!r ? console.log(`q is greter than s`) : console.log("both value equal");

//typeof Operator which type of variable are decliar
let t = 4;
let g = 4.5;
let sg = "hello world";
let bl = true;
console.log(typeof t); //t is type of number
console.log(typeof g); //g is type of number
console.log(typeof bl); //bl is type of blolean value
console.log(typeof sg); //bl is type of String value
