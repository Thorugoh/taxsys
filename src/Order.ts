import { Address } from "./Address";
import { Cart } from "./Cart";
import { Customer } from "./Customer";
import { TaxFactory } from "./factories/TaxFactory";
import { StateTax } from "./state/StateTax";
import { TaxManager } from "./TaxManager";

export class Order {
  cart: Cart;
  customer: Customer;
  deliveryAddress: Address;
  estimateDate: Date;
  stateTax: StateTax;

  constructor(cart: Cart, customer: Customer, deliveryAddress: Address, estimateDate: Date) {
    this.cart = cart;
    this.customer = customer;
    this.deliveryAddress = deliveryAddress;
    this.estimateDate = estimateDate;
    this.stateTax = TaxManager.createStateTax(this.estimateDate.getFullYear(), this.deliveryAddress.state);
  }

  completeOrder(){
    const cartTotal = this.cart.getTotal();
    const stateTax = this.stateTax.calculate(cartTotal)
    const finalPrice = cartTotal + stateTax;

    return finalPrice;
  }
}