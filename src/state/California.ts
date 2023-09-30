import { StateTax } from "./StateTax";

export class CaliforniaTax implements StateTax {
  constructor(public taxRate: number){}
  
  calculate(value: number){
    return value * (this.taxRate / 100);
  }
}