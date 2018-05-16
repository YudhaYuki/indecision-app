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
}

const me = new Student('Yudha Yuki', 27, 'Computer Science');
console.log(me);

const otherPerson = new Student();
console.log(otherPerson);

