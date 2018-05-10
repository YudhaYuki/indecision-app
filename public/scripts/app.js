"use strict";

// Arguments object - no longer bound with arrow function

// ES5
/*
const add = function(a, b) {
    console.log(arguments);
    return a + b;
}
 console.log(add(55, 1, 1001))
*/

// ES6

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound
