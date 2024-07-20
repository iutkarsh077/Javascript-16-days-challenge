//Task 1
/*let name = "John";
let age = 78;
console.log(`The name of the person is ${this.name} and age is ${age}`)

//Task 2
let multiLine = "the name of the multiline comment is the ganguly foolish on the cricket and the crickert is nos so much fantastic";
console.log(`the name of the multiline comment is the ganguly foolish on the cricket and the crickert is nos so much fantastic`)

//Task 3
let arr = ["John", "Wick", "Part", "Animal", "coffee"];
let [first, second, ...third] = arr;
let [, , , , lemon] = arr;

console.log(first, second, third[0], lemon)

//Task 4
const book = {
    name1: "From the sea",
    age: 67,
    author: "John wick",
    year: 2013
}

const { name1, ...author } = book;
console.log(name1, author)

//Task 5
const arr1 = ["Harry", "Potter", "John", "Wick", "Mobile"];
const arr2 = [...arr1, "89", 90, 56];
console.log(arr2);

//Task 6
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum(...numbers){
    return numbers.reduce((total, num)=>(
        total + num
    ))
}
console.log(sum(...arr1))

//Task 7
function product(num1, num2 = 1){
    return num1 * num2;
}
console.log(product(2, 3))
console.log(product(2))


//Task 8
let name1 = "John wick";
let age = 34;
let bookname = "bookName";

let person1 = {
    name1,
    age,
    [bookname]: "From the sea",
    sayHello() {
        console.log(`I am ${this.name1}`);
        return 1;
    },
};

const person2 = {
    //   sayHello() {
        //     super.sayHello();
        //   },
    };
    
    Object.setPrototypeOf(person2, person1)
    console.log(person2.sayHello())
    
    
    
    console.log(person1.bookName)
    
    //Task 9
    const key1 = "firstName";
    const key2 = "lastName";
    const key3 = "age";
    
    const value1 = "John";
    const value2 = "Doe";
    const value3 = 30;
    
    const person = {
        [key1]: value1,
        [key2]: value2,
        [key3]: value3,
    };

    console.log(person); 
    
    */