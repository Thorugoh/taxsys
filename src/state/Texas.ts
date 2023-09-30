import { StateTax } from "./StateTax";

export class TexasTax implements StateTax {
  constructor(public taxRate: number){}

  calculate(value: number){
    return value * (this.taxRate / 100);
  }
}