export function mocked<T>(initial: T) {
  return (data: Partial<T> = {}): T => Object.assign({}, initial, data);
}

export function mockedArray<T>(builder: () => T) {
  return (args: { count: number } = { count: 10 }) =>
    Array.from({ length: args.count }, () => builder());
}
