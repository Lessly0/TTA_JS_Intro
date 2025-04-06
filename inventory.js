let fruits=['apple','banana','mango','orange','papaya'];
let vegetables=['carrot','potato','onion','cabbage','spinach'];
let fastfood=['pizza','burger','fries','hotdog','sandwich']

console.log("====Inventory Management System====");
console.log("....... Fruits.....");

for(let i=0; i<fruits.length; i++){
    let j=i+1;
    console.log(j+". "+ fruits[i]);
}
console.log("the total number of fruits is "+ fruits.length);
console.log("-------------------");

console.log("....... Vegetables.....");
let n=0;
while(n < vegetables.length) {
    let m=n+1;
    console.log(m+". "+ vegetables[n]);
    n++;
}
console.log("the total number of vegetables is "+ vegetables.length);
console.log("-------------------");

console.log("....... Fast Food.....");
fastfood.forEach((food, index) => {
    console.log(""+(index+1)+". "+ food);
});

console.log("the total number of fast food is "+ fastfood.length);
console.log("-------------------");
