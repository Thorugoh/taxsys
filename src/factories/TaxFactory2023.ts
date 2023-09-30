import { CaliforniaTax } from "../state/California";
import { StateTax } from "../state/StateTax";
import { TexasTax } from "../state/Texas";
import { Tax2022 } from "../year/Tax2022";
import { Tax2023 } from "../year/Tax2023";
import { YearTax } from "../year/YearTax";
import { TaxFactory } from "./TaxFactory";

export class TaxFactory2023 implements TaxFactory {
  createStateTax(state: string): StateTax {
    switch (state) {
      case "California":
        return new CaliforniaTax(2.0);
      case "Texas":
        return new TexasTax(2.3);
      default:
        throw new Error("State not supported")
    }
  }

  createYearTax(): YearTax {
    return new Tax2023(1.4);
  }
}