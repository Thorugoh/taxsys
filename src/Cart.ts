import { Product } from "./Product";
import { TaxFactory } from "./TaxFactory";

export class Cart {
  items: Array<Product>;
  totalItems: number;
  taxes: number;
  taxFactory: TaxFactory;

  constructor(taxFactory: TaxFactory, items?: Array<Product>) {
    this.taxFactory = taxFactory;
    this.items = items || [];
    this.totalItems = items?.length || 0;
    this.taxes = 0;
  }

  addToCart(item: Product) {
    this.items.push(item);
  }

  getTotal() {
    const total = this.items.reduce((a: number, b: Product) => a + b.price, 0);
    this.taxes = this.taxFactory.calculateTax(total);
    return total + this.taxes;
  }
}