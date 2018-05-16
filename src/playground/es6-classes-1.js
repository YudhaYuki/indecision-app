// CHALLANGE
// Setup constructur to take name and age (default to 0)
// getDescription - YY is 27 years(s) old.


class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    // method
    getGreeting() {
        return `Hi, I am ${this.name} !`;
    }

    // method
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

// const me = new Student('Yudha Yuki', 27, 'Computer Science');
// console.log(me.getDescription());

// const otherPerson = new Student();
// console.log(otherPerson.getDescription());






// CHALLANGE
/*
    - Traveller --> Person
    - Add support for homelocation
    - Overwrite getGreeting
        - Hi, I am Yudha Yuki. I'm visiting from Indonesia.
        - Hi, I am Yudha Yuki. (If no home location)

*/

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting ${this.homeLocation}.`
        }

        return greeting;
    }
}


const me = new Traveller('Yudha Yuki', 27, 'Indonesia');
console.log(me.getGreeting());

const otherPerson = new Traveller(undefined, undefined, 'Nowhere');
console.log(otherPerson.getGreeting());

