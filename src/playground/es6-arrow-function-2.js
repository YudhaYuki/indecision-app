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
        /*
        const user = {
            name: 'Yudha',
            cities: ['Brussels', 'Prague', 'Rotterdam'],
            printPlacesLived() {
                this.cities.forEach((city) => {
                    console.log(this.name + ' has lived in ' + city)
                })
            }
        };

        user.printPlacesLived();
        */


        // ES6 MAP
        /* Normal
        const user = {
            name: 'Yudha',
            cities: ['Brussels', 'Prague', 'Rotterdam'],
            printPlacesLived() {
                const cityMessages = this.cities.map((city) => {
                    return this.name + ' has live in ' + city;
                });

                return cityMessages;
            }
        };

        console.log(user.printPlacesLived());
        */


        // Simplified I
        /*
        const user = {
            name: 'Yudha',
            cities: ['Brussels', 'Prague', 'Rotterdam'],
            printPlacesLived() {
                return this.cities.map((city) => {
                    return this.name + ' has live in ' + city;
                });
            }
        };

        console.log(user.printPlacesLived());
        */



        // Simplified II
        const user = {
            name: 'Yudha',
            cities: ['Brussels', 'Prague', 'Rotterdam'],
            printPlacesLived() {
                return this.cities.map((city) => this.name + ' has live in ' + city);
            }
        };

        console.log(user.printPlacesLived());





// Challange Area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied

    numbers : [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }

};

console.log(multiplier.multiply());
        

        





