class Product{
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }

    getInfo(){
        console.log(`\n\t Name: ${this.name} \n\t Price: ${this.price} \n\t Category: ${this.category}`);
    }

    applyDiscount(discountRate){
        let discount=(this.price*discountRate)/100;
        this.price -=discount;
        console.log(`\n\t New Price: ${this.price}`);
    }
}

let product1=new Product("Banana",100,"Fruits");
let product2=new Product("Lemon",100,"Fruits");


product1.getInfo(); 
product1.applyDiscount(10);

class Fruits extends Product{
    constructor(name,price,brand,warranty){
        super(name,price,'Fruits');
        this.brand=brand;
        this.warranty=warranty;
    }
    getInfo(){
        console.log(`\n\t Name: ${this.name} \n\t Price: ${this.price} \n\t`);
    }
}

let product3=new Fruits("Matunda",300,"none","5 days");
let product4=new Fruits("Apple",100,"none","7 days");

product3.getInfo();
//product3.getFruitsInfo();
product3.applyDiscount(10);

