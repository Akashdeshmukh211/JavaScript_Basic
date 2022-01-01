"use strict";
//Methods of primitives DATA TYPE
//There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
let str = "Hello";

console.log(str.toUpperCase()); // HELLO
let n = 1.23456;

console.log(n.toFixed()); // 1.23
console.log(n.toFixed(1)); // 1.23 in bracket put a number how many number u wnt after decimal point
console.log(n.toFixed(2)); // 1.23
let num = 4656465;
console.log(num.toString(2)); //convet number into boolean valeu
console.log(num.toString(8)); //convet number into octa valeu
console.log(num.toString(10)); //convet number into Decimal valeu
console.log(num.toString(15)); //convet number into hexdeciaml valeu

//Rounding
let n2 = 1.23456;
console.log(Math.floor(n2)); //Remove number after decimal point
console.log(Math.round(n2)); //Remove number after decimal point
console.log(Math.ceil(n2)); //Remove number after decimal point Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
console.log(Math.trunc(n2)); //Remove all deciamal number

//         Math.floor	Math.ceil	Math.round	Math.trunc
// 3.1	        3	        4	        3	        3
// 3.6	        3	        4	        4	        3
// -1.1	    -2	        -1	        -1	        -1
// -1.6	    -2	        -1	        -2	        -1

//Not a Number Nan
let str1 = "akash";
console.log(isNaN(n2)); //isNaN(value) converts its argument to a number and then tests it for being NaN:
console.log(isNaN(str1));
//isFinite
// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity

console.log(isFinite(n2));
console.log(isFinite(str1));
//parseInt and parseFloat

let number = "4564";
console.log(+number);
let pix = "12px";
console.log(parseInt(pix)); //The function parseInt returns an integer
let pix2 = "12.52px";
console.log(parseFloat(pix2));

//math functions
//random
console.log(Math.random()); //Generator random number Returns a random number from 0 to 1 (not including 1).
console.log(Math.random() * 10); //Generator random number Returns a random number from 0 to 1 (not including 1).
//Max
console.log(Math.max(12, 546, 879, 15, 4));
//Min
console.log(Math.min(12, 546, 879, 15, 4));
// Math.pow(n, power)
console.log(Math.pow(2, 4)); //gives the power of number

///Working with String

//Special characters
let guestList = "Guest's:\n * John\n * Pete\n * Mary"; // /n used for gap or space
let guestList2 = "Guest's:\r * John\r * Pete\r * Mary"; // /n used for gap or space

console.log(guestList);
let string_value = "Hello My World";
//String Method
console.log(string_value.length); //number of alphbites
console.log(string_value.toLowerCase()); //convert string into lower case
console.log(string_value.toUpperCase()); //convert string into Upper case
console.log(string_value[6]); //To get a character at position
console.log(string_value.charAt(6)); //To get a character at position: ;
console.log(string_value[string_value.length - 1]); //To get a last character
console.log(string_value.indexOf("Hello")); // 0, because 'Hello' is found at the beginning
console.log(string_value.indexOf("hello")); // -1, not found, the search is case-sensitive
console.log(string_value.indexOf("My")); // 6, "My" is found at the position 6
console.log(string_value.indexOf("My,2")); // 6, "My" is found at the position 6

//includes, startsWith, endsWith
console.log(string_value.includes("H")); // Output is boolean value
console.log(string_value.includes("My"));
console.log(string_value.startsWith("He")); //String valeu start with He output is true
console.log(string_value.startsWith("Wo")); // the stirng is not start with Wo output is false
console.log(string_value.endsWith("d")); //String value end with d so Outpur is true
console.log(string_value.endsWith("My")); //String value not end this My so that output is false

//str.slice(start [, end])
console.log(string_value.slice(5)); //Returns the part of the string from start to (but not including) end.
console.log(string_value.slice(0, 5)); //Returns the part of the string from start to (but not including) end.
console.log(string_value.slice(5, 10)); //Returns the part of the string from start to (but not including) end.
