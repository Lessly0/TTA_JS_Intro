function product(id,name,price,quantity){
    this.id=id;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.totalPrice=function(){
        return this.price*this.quantity;
    }

}

let product1=new product(1,"Banana",10,2);
let product2=new product(2,"Lemon",5,3);
let product3=new product(3,"Matunda",3,4);
let product4=new product(4,"Apple",15,5);
let product5=new product(5,"Orange",5,6);

console.log("=========================Ecobazar Invoice=====================")
console.log("+------------------------------------------------------------+");
console.log("|ID \t Name \t\t Unit Price  Quantity  \t  Total Price|");
console.log("+------------------------------------------------------------+");
console.log("|" + product1.id + "\t" + product1.name + "\t\t $" + product1.price + "\t\t" + product1.quantity + "\t\t$" + product1.totalPrice() + "  |");
console.log("|" + product2.id + "\t" + product2.name + "\t\t $" + product2.price + "\t\t" + product2.quantity + "\t\t$" + product2.totalPrice() + "  |");
console.log("|" + product3.id + "\t" + product3.name + "\t\t $" + product3.price + "\t\t" + product3.quantity + "\t\t$" + product3.totalPrice() + "  |");
console.log("|" + product4.id + "\t" + product4.name + "\t\t $" + product4.price + "\t\t" + product4.quantity + "\t\t$" + product4.totalPrice() + "  |");
console.log("|" + product5.id + "\t" + product5.name + "\t\t $" + product5.price + "\t\t" + product5.quantity + "\t\t$" + product5.totalPrice() + "  |");
console.log("+------------------------------------------------------------+");
let totalAmount=product1.totalPrice()+product2.totalPrice()+product3.totalPrice()+product4.totalPrice()+product5.totalPrice();
console.log("\tTotal Amount: \t\t\t\t\t"+ "$"+totalAmount);
