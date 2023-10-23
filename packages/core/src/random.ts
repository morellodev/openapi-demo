export function boolean() {
  return Math.random() > 0.5;
}

export function date() {
  const start = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  const end = new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function uuid() {
  return crypto.randomUUID();
}
