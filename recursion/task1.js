// Task 1

function factorial(num){
    if(num == 1 || num == 0){
        return 1;
    }

    return num * factorial(num - 1);
}

const val = factorial(6);
console.log(val);