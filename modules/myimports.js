/*
export function add(num1, num2){
        return num1 + num2;
}

export function subtract(num1, num2){
    return num1 - num2;
}

export function product(num1, num2){
    return num1 * num2;
}

export function division(num1, num2){
    return num1/num2;
}


export default function square(num1){
    return num1 ** 2;
}

*/


const name = "John Wick";
const age = 78;
export function fullName(){
    console.log(`The name is ${this.name} and age is ${this.age}`);
}

export {name, age};