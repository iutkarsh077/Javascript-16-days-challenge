// Task 5
/*
class Person {
    static name = "John Wick";
    static age = 34;

    static greet() {
        return `The name is ${this.name} and age is ${this.age}`;
    }
    role = "developer";
}

const msg = new Person();
Person.name = "Harry"
console.log(Person.greet());
console.log(msg);
*/

//Task 6
class Student{
    static count = 0;
    static name = "John wick";
    static age = 34;
    constructor(){
        Student.count++;
    }

}

let s1 = new Student();
let s2 = new Student();
// let s3 = new Student();

console.log(Student.count);


class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log('Width must be positive.');
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log('Height must be positive.');
        }
    }

    get area() {
        return this._width * this._height;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.width); // Outputs: 10
console.log(rect.height); // Outputs: 20
console.log(rect.area); // Outputs: 200

rect.width = 15;
console.log(rect.width); // Outputs: 15

rect.width = -5; // Outputs: Width must be positive.
console.log(rect.width); // Outputs: 15 (unchanged)
