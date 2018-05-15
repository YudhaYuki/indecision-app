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

const me = new Person('Yudha Yuki', 27);
console.log(me.getDescription());

const otherPerson = new Person();
console.log(otherPerson.getDescription());

