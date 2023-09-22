import { describe, expect, test } from 'bun:test';
import { Cart } from '../src/Cart';
import { Product } from '../src/Product';
import { Tax2022 } from '../src/Tax2022';

describe('Cart operations', () => {
  const tax2022 = new Tax2022();
  const cart = new Cart(tax2022);

  test('Add item to cart', () => {
    const product = new Product(50, 1, 101);
    cart.addToCart(product);
    expect(cart.items.length).toBe(1);
  });

  test('Calculate total price with tax', () => {
    const product = new Product(100, 1, 102);
    cart.addToCart(product);
    expect(cart.getTotal()).toBe(187.5);
  });
});