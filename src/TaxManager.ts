import { TaxFactory } from "./factories/TaxFactory";
import { TaxFactory2022 } from "./factories/TaxFactory2022";
import { TaxFactory2023 } from "./factories/TaxFactory2023";
import { StateTax } from "./state/StateTax";

export class TaxManager {
    static createStateTax(year: number, state: string): StateTax {
      const taxFactory = this.getTaxFactory(year);
      
      if (state === "California") {
        return taxFactory.createCaliforniaTax();
      } else if (state === "Texas") {
        return taxFactory.createTexasTax();
      } else {
        throw new Error("Unsupported state");
      }
    }
  
    static getTaxFactory(year: number): TaxFactory {
      switch (year) {
        case 2022:
          return new TaxFactory2022();
        case 2023:
          return new TaxFactory2023();
        default:
          throw new Error("Unsupported year");
      }
    }
  }