import { describe, expect, test } from 'bun:test';
import { Product } from '../src/Product';

describe('Product operations', () => {
  test('Create a product', () => {
    const product = new Product(100, 1, 101);
    expect(product.price).toBe(100);
    expect(product.quantity).toBe(1);
    expect(product.code).toBe(101);
  });
});