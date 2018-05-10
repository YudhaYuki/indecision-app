'use strict';

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
/*
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
 console.log(add(55, 1, 1001))
*/

// this keyword - no longer bound

// ES5
/*
const user = {
    name: 'Yudha',
    cities: ['Brussels', 'Prague', 'Rotterdam'],
    printPlacesLived : function () {
        const that = this;
         this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city)
        })
    }
};
 user.printPlacesLived();
*/

// ES6
var user = {
    name: 'Yudha',
    cities: ['Brussels', 'Prague', 'Rotterdam'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();
