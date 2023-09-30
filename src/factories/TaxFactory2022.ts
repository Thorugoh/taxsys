import { CaliforniaTax } from "../state/California";
import { StateTax } from "../state/StateTax";
import { TexasTax } from "../state/Texas";
import { Tax2022 } from "../year/Tax2022";
import { YearTax } from "../year/YearTax";
import { TaxFactory } from "./TaxFactory";

export class TaxFactory2022 implements TaxFactory {
  createStateTax(state: string): StateTax {
    switch (state) {
      case "California":
        return new CaliforniaTax(1.0);
      case "Texas":
        return new TexasTax(1.5);
      default:
        throw new Error("State not supported")
    }
  }

  createYearTax(): YearTax {
    return new Tax2022(1.0);
  }
}