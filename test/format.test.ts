import { expect, it } from 'vitest';
import { formatCurrency, renderInvoice } from '../src/format.js';

it('formatCurrency: 3.5 renders as $3.50', () => {
  expect(formatCurrency(3.5)).toBe('$3.50');
});

it('renderInvoice: 100 with 10% tax and no discount renders as $110.00', () => {
  expect(renderInvoice([{ price: 100, qty: 1 }], 0.1, 0)).toBe('$110.00');
});
