"use strict";
//Destructuring assignment
//Destructuring assignment is a special syntax that allows us to
//  “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Array Destructuring
let arrDes = ["Amit", "Bais"];
// array destructured into variables
let [Aname, surname] = arrDes;
console.log(Aname, surname);
let [firstName, surnameof] = "Amit Bais".split(" ");
console.log(firstName, surname);
//The rest ‘…’
//Usually, if the array is longer than the list at the left, the “extra” items are omitted.
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
  "in india",
];
console.log(rest); //rest is now array we can destruturthis array
let user = [];
//Default values
let [uname = "Amit", usurname = "bais"] = user;
console.log(user);
console.log(uname, usurname);

//Object destructuring
//The destructuring assignment also works with objects.
let objdes = {
  namef: "akash",
  namel: "deshmukh",
};
let { namef, namel } = objdes; // the key value of object shoud hava same
console.log(objdes.namef);
console.log(namef);
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { title: T, width: W, height: H } = options; //If we want to assign a property to a variable with another name
console.log(T, W, H);
//The rest pattern “…”
let { title: t, ...restobj } = options;
console.log(restobj);

//Nested destructuring
let options2 = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};
let {
  size: { width: w, height: h },
  items: [item1, item2],
  title = "menu",
} = options2;
console.log(w, h);
console.log(item1, item2);
console.log(title);

// we pass object to function
let options3 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}

showMenu(options);
