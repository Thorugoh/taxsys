import { TaxFactory } from "./TaxFactory";

export class Tax2023 extends TaxFactory {
  calculateTax(amount: number): number {
    return amount * 0.2;
  }
}