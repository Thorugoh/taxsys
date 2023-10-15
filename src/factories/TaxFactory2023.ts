import { CaliforniaTax } from "../state/California";
import { StateTax } from "../state/StateTax";
import { TexasTax } from "../state/Texas";
import { TaxFactory } from "./TaxFactory";

export class TaxFactory2023 implements TaxFactory {
  createCaliforniaTax(): StateTax {
    return new CaliforniaTax(2.0);
  }
  createTexasTax(): StateTax {
    return new TexasTax(2.3);
  }
}