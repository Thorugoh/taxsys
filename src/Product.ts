export class Product {
  price: number;
  quantity: number;
  code: number;

  constructor(price: number, quantity: number, code: number){
    this.price = price;
    this.quantity = quantity;
    this.code = code;
  }
}
