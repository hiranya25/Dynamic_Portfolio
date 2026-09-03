export function formatStatValue(value: number): string {
  if (value >= 100_000) {
    const thousands = value / 1000;
    const rounded = Number.isInteger(thousands) ? thousands : Math.round(thousands * 10) / 10;
    return `${rounded}K`;
  }
  return value.toLocaleString("en-US");
}
