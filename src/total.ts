import { applyDiscount } from './discount.js';
import { computeTax } from './tax.js';

export function lineTotal(price: number, qty: number): number {
  return price * qty;
}

export function invoiceTotal(
  items: { price: number; qty: number }[],
  taxRate: number,
  discountPct: number,
): number {
  const subtotal = items.reduce((sum, item) => sum + lineTotal(item.price, item.qty), 0);
  const discounted = applyDiscount(subtotal, discountPct);
  return discounted + computeTax(discounted, taxRate);
}
