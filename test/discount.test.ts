import { expect, it } from 'vitest';
import { applyDiscount } from '../src/discount.js';

it('applyDiscount: 20% off 100 is 80', () => {
  expect(applyDiscount(100, 0.2)).toBe(80);
});
