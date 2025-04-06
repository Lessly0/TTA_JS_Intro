// Functions

function sayHelllo(){
    console.log("Hello World!");
}

function greet(name){
    //console.log("Hello" + name)
    return "Hello " + name;
}

const addition=function(a,b){
    return a+b;
}

let sum= addition(10,10);


sayHelllo();

//greet('John');

console.log(greet('John'));

console.log(`The sum is ${sum}`);

//arrow function

const multiply=(a,b) => a*b
let product=multiply(10,5)

console.log(`The product is + ${product}`);

// functional scope

let x=5;

function example(){
    let x=10;
    console.log(`The value of x ${x}`);
}

example();
console.log(`the value of x is $(x)`);



