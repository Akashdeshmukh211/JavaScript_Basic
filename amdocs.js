// "use strict";

const { colours } = require("nodemon/lib/config/defaults");

// //const { count } = require("console");

// var obj = {
//   fname: "akash",
//   lname: "deshmukh",
//   age: 27,
// };
// var obj2 = obj;
// console.log(obj2);
// const arr = [1, 2, 5, 6, 2, 4, 8, 9, 7, 8, 9];

// for (let i = 0; i <= arr.length; i++) {
//   if (i <= 2) {
//     //console.log(i);
//   }
// }
// const newuniqarr = [...new Set(arr)];
// //console.log(newuniqarr);
// const arr2 = arr.sort(function (a, b) {
//   return a - b;
// });
// //console.log();

// //console.log(arr2);

// var str = "hello world";
// var strsilce = str.slice(4);
// var substring = str.substring(0, 8);
// var newstr = str.replace("world", "amdocs");
// //console.log(newstr);
// //console.log(substring);
// //console.log(strsilce);
// //right tringle
// let n = 5;
// let string = "";
// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// //lef triangle
// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // console.log(string);
// // //downword triangle
// // for (let i = 1; i < n; i++) {
// //   for (let j = 0; j <= n - i; j++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);
// //primnumber
// // let number = 8;
// // let isPrime = true;
// // if (number === 1) {
// //   console.log("1 is neither prime or composite");
// // } else if (number > 1) {
// //   for (let i = 2; i < number; i++) {
// //     if (number % i == 0) {
// //       isPrime = false;
// //       break;
// //     }
// //   }
// //   if (isPrime) {
// //     console.log("is prime");
// //   } else {
// //     console.log(" is not prime");
// //   }
// // } else {
// //   console.log("the number is less than 1");
// // }
// // var stri = "name";

// function checkp(str) {
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "it is not paridorm";
//     }
//   }
//   return "it is paridom";
// }
// const strig = "madam";

// //const result = checkp(strig);

// //console.log(result);
// // program to check if the string is palindrome or not

// function checkPalindrome(str) {
//   // find the length of a string
//   const len = string.length;
//   var mid = Math.floor(len / 2);

//   // loop through half of the string
//   for (let i = 0; i < mid; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// // take input
// const strng = "madam";

// // call the function
// const value = checkPalindrome(strng);

// console.log(value);
// function isPalindrome(string) {
//   if (string == string.split("").reverse().join("")) {
//     console.log(string + " is palindrome.");
//   } else {
//     console.log(string + " is not palindrome.");
//   }
// }
// const result = isPalindrome("madam");
//BMI Colulation using mass/Height ** 2
// let markHeight = 1.69;
// let markMass = 78;
// let jonsHeight = 1.95;
// let jonsMass = 92;

// let markBIM = markMass / markHeight ** 2;
// console.log(markBIM);
// let jonsBIM = jonsMass / (jonsHeight * jonsHeight);
// console.log(jonsBIM);
// const markHeightBim = markBIM > jonsBIM;
// console.log(markHeightBim);
// if (markBIM > jonsBIM) {
//   console.log(`Mark BIM Heigher then jones ${markBIM}`);
// } else {
//   console.log(`Mark BIM is less then josen ${jonsBIM}`);
// }

//Templets String
// const firstName = "akash";
// const age = 27;
// const job = "programmer";

// const fullDetail = `I'm ${firstName} ,a ${27} year old job - ${job}`;
// console.log(fullDetail);

// console.log(`string
// multi
// lines😍`);
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// let age = "18";
// if (age == 18) console.log("Type coversion done");

// if (age === 18) console.log("=== does not do type coversion");

let dolPhin = (96 + 108 + 89) / 3;
let koarlo = (88 + 91 + 110) / 3;
console.log(dolPhin);
console.log(koarlo);

//ternarty

const age = 23;
age >= 18 ? console.log("true") : console.log("falue");

//tip calculator
// let tip;
// let bill = 430;

// let tips =
//   bill >= 50 && bill <= 300
//     ? (tip = (bill / 100) * 15)
//     : (tip = (bill / 100) * 20);
// console.log(`bill was ${bill}, tip was a ${tips} and the total ${bill + tips}`);

//funcition decliration

let age1 = calage(1993);

function calage(birthyear) {
  return 2021 - birthyear;
}

//function expression

const calage2 = function (birthyear) {
  return 2021 - birthyear;
};
let age2 = calage2(1993);

//Arrow function
const calage3 = (birthyear) => 2021 - birthyear;
const age3 = calage3(1993);

const retage = (birthyear) => {
  const age = 2021 - birthyear;
  const retage = 65 - age;
  return retage;
};
const retiage = retage(1993);

const caladdtion = (a, b) => {
  const c = a + b;
  return c;
};
const addtion = caladdtion(15, 15);
console.log(age1, age2, age3, retiage, addtion);
//array function

const bill = [125, 555, 44];
function tips(bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = (bill / 100) * 15;
    return tip;
  } else {
    let tip = (bill / 100) * 20;
    return tip;
  }
}

tip1 = tips(bill[0]);
tip2 = tips(bill[1]);
tip3 = tips(bill[2]);

tipsarr = [
  tips(bill[0]) + bill[0],
  tips(bill[1]) + bill[1],
  tips(bill[2]) + bill[2],
];

console.log(tip1, tip2, tip3);
console.log(tipsarr);

const akash = {
  fname: "akash",
  lname: "deshmukh",
  age: "27",
  job: "develpor",

  discp: function () {
    this.f = this.fname;
    this.l = this.lname;
    this.a = this.age;
    this.j = this.job;
    return `${this.f} ${this.l} ${this.a} ${this.j}`;
  },
};
console.log(akash.discp());

const jonas = {
  fullname: "Jonas Smiths",
  mass: 78,
  heigth: 1.96,
  calBMI: function () {
    this.BMI = this.mass / (this.heigth * this.heigth);
    return this.BMI;
  },
};

const Miller = {
  fullname: "Miller killer",
  mass: 45,
  heigth: 1.95,
  calBMI: function () {
    this.BMI = this.mass / (this.heigth * this.heigth);
    return this.BMI;
  },
};
const jbm = jonas.calBMI();
const Mbmi = Miller.calBMI();

if (jbm > Mbmi) {
  console.log(`jonse bmi height ${jonas.calBMI()}`);
} else {
  console.log(`miller bmi is  hight ${Miller.calBMI()}`);
}
for (let i = 1; i <= 10; i++) {
  // console.log(`repition ${i}`);
}
const arr = [1, 2, 5, 4, 6, "akash", 8, 8];
const arrtypes = [];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i], typeof arr[i]);

  //arrtypes[i] = typeof arr[i];

  arrtypes.push(arr[i]);
}
console.log(arrtypes);

const year = [1993, 1578, 1562, 1235, 4555];
const ages = [];

for (let i = 0; i <= year.length; i++) {
  let age = year[i] - 2021;
  ages.push(age);
}
// console.log(ages);
let n = 5;
let string = "";
// Square star pattern in javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n";
}
//console.log(string);
//Hollow square pattern

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    if (i === 0 || i === n - 1) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

//Right triangle pattern in javascript
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//Left triangle pattern in javascript
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
