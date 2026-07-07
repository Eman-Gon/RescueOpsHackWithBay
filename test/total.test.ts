import { expect, it } from 'vitest';
import { invoiceTotal, lineTotal } from '../src/total.js';

it('lineTotal: 3 x 4 is 12', () => {
  expect(lineTotal(3, 4)).toBe(12);
});

it('invoiceTotal: 100 with 10% tax and no discount is 110', () => {
  expect(invoiceTotal([{ price: 100, qty: 1 }], 0.1, 0)).toBe(110);
});

it('invoiceTotal: subtotal 25, 20% discount, then 10% tax is 22', () => {
  const items = [
    { price: 10, qty: 2 },
    { price: 5, qty: 1 },
  ];
  expect(invoiceTotal(items, 0.1, 0.2)).toBe(22);
});
