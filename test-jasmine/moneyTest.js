import { formatCurrency } from "../utils/money.js";

describe('test suite: formatCurrency', () => {
  it('converts cent into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });
});
