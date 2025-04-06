const person={
    name:"John",
    age:30,
    occupation:"Teacher",
    greet:function(){
        console.log("Hello, my name is " + this.name);
    }
   
}

console.log(person.name); 
console.log(person["age"]);
person.greet();