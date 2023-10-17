export function boolean() {
  return Math.random() > 0.5;
}

export function integer() {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}
