import { expect, it } from 'vitest';
import { computeTax } from '../src/tax.js';

it('computeTax: 10% of 100 is 10', () => {
  expect(computeTax(100, 0.1)).toBe(10);
});
