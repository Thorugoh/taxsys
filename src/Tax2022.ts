import { TaxFactory } from "./TaxFactory";

export class Tax2022 extends TaxFactory {
  calculateTax(amount: number): number {
    return amount * 0.25;
  }
}