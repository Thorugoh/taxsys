import { CaliforniaTax } from "../state/California";
import { StateTax } from "../state/StateTax";
import { TexasTax } from "../state/Texas";
import { TaxFactory } from "./TaxFactory";

export class TaxFactory2022 implements TaxFactory {
  createCaliforniaTax(): StateTax {
    return new CaliforniaTax(1.0);
  }

  createTexasTax(): StateTax {
    return new TexasTax(1.5);
  }
}
