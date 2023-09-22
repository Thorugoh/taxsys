import { expect, test, describe } from "bun:test";
import { Tax2022 } from "../src/Tax2022";
import { Tax2023 } from "../src/Tax2023";

describe('Tax calculation', () => {
  test('Tax for 2022 should be 20%', () => {
    const tax2022 = new Tax2022();
    expect(tax2022.calculateTax(100)).toBe(25);
  });

  test('Tax for 2023 should be 25%', () => {
    const tax2023 = new Tax2023();
    expect(tax2023.calculateTax(100)).toBe(20);
  });
});