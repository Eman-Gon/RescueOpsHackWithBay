export function applyDiscount(amount: number, pct: number): number {
  return amount * (1 - pct);
}
