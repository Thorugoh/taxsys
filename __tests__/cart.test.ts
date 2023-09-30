import { describe, expect, test } from 'bun:test';
import { Cart } from '../src/Cart';
import { Product } from '../src/Product';

describe("Cart", () => {
  test("should add product to cart", () => {
    const cart = new Cart();
    const product = new Product(100, 1, 1);
    cart.addToCart(product);
    expect(cart.items.length).toBe(1);
  });

  test("should calculate the total", () => {
    const cart = new Cart([new Product(100, 1, 1), new Product(50, 1, 2)]);
    const total = cart.getTotal();
    expect(total).toBe(150);
  });
});