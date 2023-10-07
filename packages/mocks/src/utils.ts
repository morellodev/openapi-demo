const API_ENDPOINT = "http://localhost:3000";

export function getFullUrl<Path extends `/${string}`>(path: Path) {
  return `${API_ENDPOINT}${path}` as const;
}

export function getRandomInt() {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}
