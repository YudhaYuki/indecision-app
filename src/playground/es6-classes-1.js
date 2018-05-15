class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }

    // method
    getGreeting() {
        return `Hi, I am ${this.name} !`;
    }
}

const me = new Person('Yudha Yuki');
console.log(me.getGreeting());

const otherPerson = new Person();
console.log(otherPerson.getGreeting());