import { invoiceTotal } from './total.js';

export function formatCurrency(n: number): string {
  return '$' + n.toFixed(2);
}

export function renderInvoice(
  items: { price: number; qty: number }[],
  taxRate: number,
  discountPct: number,
): string {
  return formatCurrency(invoiceTotal(items, taxRate, discountPct));
}
