class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Methods
    // add a # before the method's name to make it class private
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak}, my name is ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const babyloper1 = new user('Juan', 23);
console.log(babyloper1.uAge);
console.log(babyloper1.uAge = 20);
console.log(babyloper1.greeting());