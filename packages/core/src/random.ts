export function boolean() {
  return Math.random() > 0.5;
}

export function integer(
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
) {
  if (min > max) {
    throw new Error(`Min (${min}) cannot be greater than max (${max})`);
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
