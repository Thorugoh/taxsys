import { YearTax } from "./YearTax";

export class Tax2022 implements YearTax {
  constructor(public taxRate: number){}

  calculate(value: number){
    return value * (this.taxRate / 100);
  }
}