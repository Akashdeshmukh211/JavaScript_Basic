"use strict";

// Without "use strict", everything still works,
// but some features behave in the old-fashion,
// “compatible” way. We’d generally prefer the modern behavior.

//The directive must be at the top of a script or at the beginning of a function body.

//Type Conversions
//String Conversion
let value = 7788;
console.log(typeof value);

value = String(value);
console.log(typeof value);

//Numeric Conversion
let str = "4567";
console.log(typeof str);

str = Number(str);
console.log(typeof str);
