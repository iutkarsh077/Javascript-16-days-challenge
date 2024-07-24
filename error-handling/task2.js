//Task2
/*const getDeno = (num1, num2) => {
  try {
    if (num2 == 0) {
      throw new Error("Denominator is zero, please try with another ones");
    }
    return num1 / num2;
  } catch (error) {
    console.log(error);
    return false;
  }
};
console.log(getDeno(4, 0));


//Task 3
const final = () =>{
    try {
        console.log("Everything is done");
        if(true){
            throw new Error("Hiii")
        }
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("This is a final block");
    }
}

console.log(final());

class Parent {
    constructor(name) {
        this.name = name;
    }
    first(greeting) {
        console.log(`${greeting}`, this.name);
    }
}

class child extends Parent {
    constructor(name) {
        super(name);
    }
    
    myChild() {
        console.log("This is mychild");
    }
}

let firstChild = new child("Harry");
firstChild.first("Hii");
// let newParent = new Parent();
// console.log(newParent.first())
*/

//Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const someFunction = () => {
  throw new CustomError("This is a custom error message");
};

const func1 = () => {
  try {
    someFunction();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error", error.message);
    } else {
      console.error("Caught an unexpected error:", error);
    }
  }
};


func1();