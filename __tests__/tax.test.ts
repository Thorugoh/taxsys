import { expect, test, describe } from "bun:test";
import { TaxFactory2022 } from "../src/factories/TaxFactory2022";
import { CaliforniaTax } from "../src/state/California";
import { TexasTax } from "../src/state/Texas";


describe("TaxFactory", () => {
  test("should create appropriate state tax for 2022", () => {
    const factory = new TaxFactory2022();

    const californiaTax = factory.createCaliforniaTax();
    expect(californiaTax).toBeInstanceOf(CaliforniaTax);

    const texasTax = factory.createTexasTax();
    expect(texasTax).toBeInstanceOf(TexasTax);
  });
});