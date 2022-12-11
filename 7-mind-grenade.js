// When there is a function call inside a module
// even without an assignment, the function will 
// execute directly

const num1= 10
const num2= 5

function addValues(){
    console.log(`The sum is ${num1 + num2}`);
}

addValues(); // this function will automatically execute