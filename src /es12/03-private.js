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