import { formatCurrency } from "./helpers";

test("Format Currency", () => {
  expect(formatCurrency(5.0)).toBe("£5.00");
});
