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
        const user = {
            name: 'Yudha',
            cities: ['Brussels', 'Prague', 'Rotterdam'],
            printPlacesLived : function () {
                this.cities.forEach((city) => {
                    console.log(this.name + ' has lived in ' + city)
                })
            }
        };

        user.printPlacesLived();


