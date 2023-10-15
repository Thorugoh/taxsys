import { expect, test, describe, beforeEach } from "bun:test";
import { Cart } from "../src/Cart";
import { Product } from "../src/Product";
import { Address } from "../src/Address";
import { Customer } from "../src/Customer";
import { Order } from "../src/Order";
import { TaxFactory2022 } from "../src/factories/TaxFactory2022";

describe("Order", () => {
  let cart: Cart;
  let customer: Customer;
  let address: Address;
  let taxFactory: TaxFactory2022;

  beforeEach(() => {
    cart = new Cart([new Product(100, 1, 1)]);
    address = new Address("USA", "California", "Some City", "Some Neighborhood", 123);
    customer = new Customer("John", 30, address, "123-456-7890", 123456789);
    taxFactory = new TaxFactory2022();
  });

  test("should calculate the final price based on state tax", () => {
    const order = new Order(cart, customer, address, new Date());

    const finalPrice = order.completeOrder();
    expect(finalPrice).toBeCloseTo(102);
  });

  test("should calculate the final price based on Texas state tax", () => {
    address = new Address("USA", "Texas", "Some City", "Some Neighborhood", 123);
    customer = new Customer("Jane", 25, address, "789-456-1230", 987654321);

    const order = new Order(cart, customer, address, new Date());
    
    const finalPrice = order.completeOrder();
    expect(finalPrice).toBeCloseTo(102.3);  // Assuming Texas tax rate is 1.0 in 2022
  });
});