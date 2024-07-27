//Task 1
/*
function outer(){
    let name = "John Wick";
    function inner(){
        console.log(name);
    }

    inner();
}

outer();

//Task 2

counter = 0;
const outer = () => {
    counter++;
    return function inner() {
        return counter;
    };
};

let val = outer();
console.log(val());

console.log(val());

console.log(val());


//Task 3
const createUniqueNumberGenerator = () => {
  let lastGeneratedNumber = 0;
  
  return () => {
    lastGeneratedNumber++;
    return lastGeneratedNumber;
};
};

// Usage
const uniqueNumberGenerator = createUniqueNumberGenerator();

console.log(uniqueNumberGenerator()); // Outputs: 1
console.log(uniqueNumberGenerator()); // Outputs: 2
console.log(uniqueNumberGenerator()); // Outputs: 3
console.log(uniqueNumberGenerator()); // Outputs: 4

//Task 4
function outer(name){
    return function(){
        console.log(`Hii ${name}, Have a nice day!`);
    }
}


let val = outer("John wick");
let val2 = outer("Robert Downy Jr.");
val();
val2()
*/




//Task 5
let arr = [];
for(let i = 0; i < 5; i++){
    let name = (i + 47).toString();
    const logValue = () =>{
        console.log("Hii this is", i);
    }
    arr.push(logValue)
}

// arr.forEach(val => val())
