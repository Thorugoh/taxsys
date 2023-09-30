import { Address } from "./Address";
import { Cart } from "./Cart";
import { Customer } from "./Customer";
import { TaxFactory } from "./factories/TaxFactory";
import { StateTax } from "./state/StateTax";
import { YearTax } from "./year/YearTax";

export class Order {
  cart: Cart;
  customer: Customer;
  deliveryAddress: Address;
  estimateDate: Date;
  stateTax: StateTax;
  taxFactory: TaxFactory;
  yearTax: YearTax;

  constructor(cart: Cart, customer: Customer, deliveryAddress: Address, estimateDate: Date, taxFactory: TaxFactory) {
    this.cart = cart;
    this.customer = customer;
    this.deliveryAddress = deliveryAddress;
    this.estimateDate = estimateDate;
    this.taxFactory = taxFactory;
    this.stateTax = taxFactory.createStateTax(deliveryAddress.state);
    this.yearTax = taxFactory.createYearTax();
  }

  completeOrder(){
    const cartTotal = this.cart.getTotal();
    const baseTax = this.yearTax.calculate(cartTotal)
    const stateTax = this.stateTax.calculate(cartTotal)
    const finalPrice = cartTotal + baseTax + stateTax;

    return finalPrice;
  }
}