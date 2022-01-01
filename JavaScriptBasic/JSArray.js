"use strict";
// /Declaration
//
//There exists a special data structure named Array, to store ordered collections.
let arr = [3, 5, 3];
let arr2 = new Array();
console.log(typeof arr);
console.log(typeof arr2);
let frineds = ["shri", "sai", "akash"];
//Array hold the index value of element indes start with 0
console.log(frineds[0]);
console.log(frineds[1]);
console.log(frineds[2]);
frineds[2] = "amit"; // to replace value of element in array
console.log(frineds[2]);
frineds[3] = "yvuraj";
console.log(frineds[3]);
//

//push appends an element to the end.
//shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st

arr.push(1); //push adds an element to the end.
console.log(arr[0]);
console.log(arr);
let endelement = arr.pop(); //pop takes an element from the end.
console.log(endelement);
arr.unshift(5); // unshift adds elenmet to start
console.log(arr);
let startelement = arr.shift();
console.log(startelement);

//One of the oldest ways to cycle array items is the for loop over indexes:
for (let index = 0; index < frineds.length; index++) {
  const element = frineds[index];
  console.log(element);
}

//Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0]);
console.log(matrix[0][2]);
console.log(matrix.length);
//toString

console.log(String(arr));

//Array methods
console.log(frineds.length); // give the total element in array
delete frineds[1];
console.log(frineds.length); // give the total element in array

//splice
//arr.splice(start[, deleteCount, elem1, ..., elemN])
// It modifies arr starting from the index start: removes deleteCount elements and
// then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

frineds.splice(0, 2, "sai", "vinu", "anant");
console.log(frineds);
//slice
//arr.slice([start], [end])// start and end index value
console.log(frineds.slice(1, 4));
console.log(frineds.slice(-2));

//concat
console.log(arr.concat(3, 5, 6, 7, 8));
let obj = {
  name: "akash",
  age: 23,
};
console.log(arr.concat(obj));

// /Iterate: forEach

///arr.forEach(function(item, index, array) {
// ... do something with item
// });

frineds.forEach(function (val, ind, arr) {
  //   console.log(val);
  //   console.log(ind);
  console.log(`${ind + 1} :- ${val}`);
});

//indexOf/lastIndexOf and includes
console.log(frineds.indexOf("amit"));
console.log(frineds.lastIndexOf("amit"));

//find and findIndex
// let result = frineds.find(function (item, index, array) {

// });
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let result = users.find(function (val, index, users) {
  return val.id == 2;
});
console.log(result);
let result1 = users.find((val) => val.id == 1);
console.log(result1);

//filter
// let results = arr.filter(function(item, index, array) {
//   // if true item is pushed to results and the iteration continues
//   // returns empty array if nothing found
// });
let array = [1, 3, 6, 8, 3, 9, 4, 0, 4, 6, 3];
let resultoffilter = array.filter(function (val, indec, arr) {
  return val < 7;
});
console.log(resultoffilter);
let resultoffilter2 = array.filter(function (val, indec, arr) {
  return val == 7;
});
console.log(resultoffilter2);

//find return frist value in array which is depand on condition
console.log(
  array.find(function (val, i) {
    return val > 3;
  })
);

//map
// let resultofmap = arr.map(function (item, index, array) {
//   // returns the new value instead of item
// });
let resultfomap = arr.map(function (item, index, array) {
  return item + 1;
});
console.log(arr);
console.log(resultfomap);
//sort
let sortarr = [1, 4, 6, 7, 9, 3, 4, 2, 5];
console.log(sortarr);
console.log(sortarr.sort());

//reverse
console.log(sortarr.reverse());
//split
let fname = "akash";
console.log(fname.split(""));
let splitre = fname.split("");
console.log(splitre);
let reverre = splitre.reverse();
console.log(reverre);
let joinre = reverre.join("");
console.log(joinre);

function palimdrom(string) {
  if (string == string.split("").reverse().join("")) {
    console.log(`${string} is palimdrom`);
  } else {
    console.log(`${string} is not palimdrom`);
  }
}
palimdrom("akash");
palimdrom("madam");

//reduce/reduceRight
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);
let reduseoutput = sortarr.reduce(function (acc, curt, index, sortarr) {
  return 2 * acc + curt;
});
console.log(reduseoutput);

//Array.isArray ot
console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true

let range = {
  from: 1,
  to: 5,
};

let namestring = "akash";

for (let s of namestring) {
  console.log(s);
}
let arrayLike = {
  // has indexes and length => array-like
  0: "Hello",
  1: "World",
};
// for (let s of arrayLike) {
//   console.log(s);
// }
// Array.from There’s a universal method Array.from that takes an iterable or
// array-like value and makes a “real” Array from it. Then we can call array methods on it.

let arriterable = Array.from(arrayLike);
console.log(arriterable.pop());
