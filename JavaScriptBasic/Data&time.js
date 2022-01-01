"use strict";
// Date and time
//Creation
let data = new Date();
console.log(data); //create a Date object for the current date and time:
// new Date(milliseconds)
let datam = new Date(0);
console.log(datam);
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);
// Dates before 01.01.1970 have negative timestamps, e.g.:
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// new Date(datestring)
//new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
// The year must have 4 digits: 2013 is okay, 98 is not.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
let Data = new Date("1993-05-23");
let bdate = new Date("1993", "05", "04");
console.log(Data);
console.log(bdate);
console.log(new Date(2011, 0, 1, 0, 0, 0, 0));

///Access date components
// There are methods to access the year, month and so on from the Date object:
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let time = today.getTime();
console.log(year, month, day, time);

//Setting date components
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
today.setFullYear("1993");
today.setMonth("12", [15]);
today.setDate("17");
console.log(today);
