import { StateTax } from "../state/StateTax";

export interface TaxFactory {
  createCaliforniaTax(): StateTax;
  createTexasTax(): StateTax;
}