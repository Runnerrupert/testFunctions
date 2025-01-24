function Person (name) {
    this.name = name
}

Person.prototype.greet = function () {
    return `Hello my name is ${this.name}.`
}

const john = new Person("John");

console.log(john.greet());


class PersonTwo {
    constructor (name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const jill = new PersonTwo("Jill");
jill.greet();