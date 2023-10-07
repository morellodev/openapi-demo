export function isObject(data: unknown): data is Record<string, unknown> {
  return typeof data === "object" && data !== null;
}
