import { Product } from "./Product";

export class Cart {
  items: Array<Product>;
  totalItems: number;
  taxes: number;

  constructor(items?: Array<Product>) {
    this.items = items || [];
    this.totalItems = items?.length || 0;
    this.taxes = 0;
  }

  addToCart(item: Product) {
    this.items.push(item);
  }

  getTotal() {
    const total = this.items.reduce((a: number, b: Product) => a + b.price, 0);
    return total;
  }
}