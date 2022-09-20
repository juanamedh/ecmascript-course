// Declaring class
class User {};
// Class instance
// Const newUser = new User();

class user {
    //methods
    greeting() {
        return 'Hello';
    }
};

const jass = new user();
console.log(jass.greeting());
const babyloper = new user;
console.log(babyloper.greeting());

//Constructor

class user {
    //Constructor
    constructor() {
        console.log('New User');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// This

class user {
    constructor(name) {
        this.name = name;
    }
    // Methods
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()}, my name is ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// Getters & Setters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Methods
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak}, my name is ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}


const babyloper1 = new user('David', 15);
console.log(babyloper1.uAge);
console.log(babyloper1.uAge = 20);