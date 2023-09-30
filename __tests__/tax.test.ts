import { expect, test, describe } from "bun:test";
import { TaxFactory2022 } from "../src/factories/TaxFactory2022";
import { CaliforniaTax } from "../src/state/California";
import { TexasTax } from "../src/state/Texas";
import { TaxFactory2023 } from "../src/factories/TaxFactory2023";


describe("TaxFactory", () => {
  test("should create appropriate state tax for 2022", () => {
    const factory = new TaxFactory2022();

    const californiaTax = factory.createStateTax("California");
    expect(californiaTax).toBeInstanceOf(CaliforniaTax);

    const texasTax = factory.createStateTax("Texas");
    expect(texasTax).toBeInstanceOf(TexasTax);
  });

  test("should create appropriate state tax for 2023", () => {
    const factory = new TaxFactory2023();

    const californiaTax = factory.createStateTax("California");
    expect(californiaTax).toBeInstanceOf(CaliforniaTax);

    const texasTax = factory.createStateTax("Texas");
    expect(texasTax).toBeInstanceOf(TexasTax);
  });
});