import { Address } from "./Address";
import { Customer } from "./Customer";

export class Order {
  price: number;
  customer: Customer;
  deliveryAddress: Address;
  estimateDate: Date;

  constructor(price: number, customer: Customer, deliveryAddress: Address, estimateDate: Date) {
    this.price = price;
    this.customer = customer;
    this.deliveryAddress = deliveryAddress;
    this.estimateDate = estimateDate;
  }
}