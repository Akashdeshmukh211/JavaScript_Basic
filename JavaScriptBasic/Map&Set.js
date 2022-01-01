"use strict";
//Map
//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type
// Methods and properties are:
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let newMap = new Map([
  [1, "1"],
  [2, "akash"],
  [3, "age"],
  [4, "driving L"],
]);

console.log(newMap);
newMap.set(5, "deshmukh");
console.log(newMap);
let getvalue = newMap.get(5);
console.log(getvalue);
console.log(newMap.has(6));
console.log(newMap.has(2));
console.log(newMap.size);
newMap.delete(4);
console.log(newMap);
newMap.clear();
console.log(newMap);
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

//Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let set = new Set();
set.add("akash");
set.add("akash");
console.log(set);
set.add("shri");
set.add("sai");
set.add("amit");
console.log(set);
console.log(set.size);
console.log(set.has("amit"));
set.delete("amit");
console.log(set);
set.clear();
console.log(set);

//Iteration over Set
let fruit = new Set(["oranges", "apples", "bananas", "apples"]);
for (let f of fruit) {
  console.log(f);
}
// the same with forEach:
fruit.forEach((value, valueAgain, set) => {
  console.log(value);
  console.log(valueAgain);
});
// iterate over keys (vegetables)
for (let vegetable of fruit.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of fruit.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of fruit) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

//Object.keys, values, entries
// These methods are generic, there is a common agreement to use them for data structures.
//  If we ever create a data structure of our own, we should implement them too
let user = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Destructuring assignment
// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.
// Although, when we pass those to a function, it may need not an object/array as a whole. It may need individual pieces.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch
// of variables, as sometimes that’s more convenient.

// Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

let arrForDes = ["akash", "deshmukh"];

// array  destructured into variables:
let [firstname, lastname] = arrForDes;
console.log(firstname);
console.log(lastname);
let [firstName, surname] = "akash deshmukh".split(" ");
console.log(firstName);
//Ignore elements using commas
let [Name, , title1] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title1); // Consul
//The rest ‘…’
//“default” value
let [value, , value1 = "all", ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(value);
console.log(value1);

//Object destructuring
//let {var1, var2} = {var1:…, var2:…}
let options = {
  menu: "Menu",
  width: "",
  height: 200,
};
let { menu, width, height } = options;

console.log(menu); // Menu
console.log(width); // 100
console.log(height); // 200

let { widthvalu = 300, height: h } = options;

console.log(widthvalu);
console.log(h);

let options2 = {
  size: {
    w: 100,
    h: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    w2,
    h2,
  },
  items: [item1, item2], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200
alert(item1); // Cake
alert(item2); // Donut
