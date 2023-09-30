import { StateTax } from "../state/StateTax";
import { YearTax } from "../year/YearTax";

export interface TaxFactory {
  createStateTax(state: string): StateTax;
  createYearTax(): YearTax;
}