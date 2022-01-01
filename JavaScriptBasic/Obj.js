"use strict";
/* objects are used to store keyed collections of various data and more complex entities.
  In JavaScript, objects penetrate almost every aspect of the language.
  So we must understand them first before going in-depth anywhere else.*/
let user1 = new Object(); // "object constructor" syntax
let user = {
  fristName: "AKASH",
  lastName: "deshmukh",
  birthYear: 1996,
}; // "object literal" syntax
console.log(typeof user);
console.log(user);
console.log(user.fristName);
console.log(user.lastName);
console.log(user.birthYear);
user.age = 27; //insert New value in object
console.log(user.age);
// delete user.age; // remove value from object
console.log(user);
console.log(user.fristName + " " + user.lastName);
user.age = 28;

//Property existence test, “in” operator
console.log("birthYear" in user);

//retreve data from object
let i;
for (i in user) {
  console.log(user[i]); // key with value
  console.log(i); //only key of object
}
let user63 = {
  fristName: "AKASH",
  lastName: "deshmukh",
  birthYear: 1996,
  sayhi() {
    console.log(`Hii Good Morning ${this.fristName}`);
  },
  getAge() {
    return 2037 - this.birthYear;
  },
  getAdd(a, b) {
    console.log(a + b);
  },
}; // "object literal" syntax
let id = Symbol("id"); //Symbol type object value
user63[id] = 63;
let age = user63.getAge();
console.log(age);
user63.getAdd(7, 5);
user63.sayhi();
console.log(user63[id]);

//Object references and copying
//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
//When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let copyobj = {
  name: "copying",
  ref: "references",
};
let copyed = copyobj;
console.log(copyed.name);
copyed.name = "AKash";
console.log(copyobj.name);
console.log(copyed == copyobj);
// what if we need to duplicate an object? Create an independent copy, a clon

let clone = {};

for (let key in copyobj) {
  clone[key] = copyobj[key];
}
console.log(clone);
clone.name = "deshmukh";
console.log(copyobj);

//we can use the method Object.assign for that.

//Constructor, operator "new"
function User(fname, lname, admin = true) {
  this.fname = fname;
  this.lname = lname;
  this.admin = admin;
  this.sayhi = function () {
    console.log(`Hello User` + " " + this.fname);
  };
}
let User1 = new User("akash", "deshmukh");
console.log(User1);
let User2 = new User("akul", "deshmukh", false);
console.log(User2.sayhi());

//Optional chaining '?.'
console.log(User1.Address);
console.log(user.address ? user.address.street : undefined);
// The optional chaining ?. syntax has three forms:

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.

//The conversion algorithm is:

// Call obj[Symbol.toPrimitive](hint) if the method exists,
// Otherwise if hint is "string"
// try obj.toString() and obj.valueOf(), whatever exists.
// Otherwise if hint is "number" or "default"
// try obj.valueOf() and obj.toString(), whatever exists.
