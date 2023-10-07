import { isObject } from "./utils";

interface RequestConfig {
  url: string;
  method: "get" | "put" | "patch" | "post" | "delete";
  params?: Record<string, string | string[]>;
  headers?: Record<string, string>;
  data?: unknown;
  signal?: AbortSignal;
}

export const customInstance = async <T>(config: RequestConfig): Promise<T> => {
  const url = new URL(config.url, "http://localhost:3000");
  if (config.params) {
    Object.entries(config.params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
  }

  const headers = new Headers(config.headers);
  if (isObject(config.data)) {
    headers.set("Content-Type", "application/json");
  }

  const body = isObject(config.data) ? JSON.stringify(config.data) : null;

  const response = await fetch(url, {
    method: config.method.toUpperCase(),
    body,
    headers,
    signal: config.signal,
  });

  if (!response.ok) {
    return Promise.reject(response);
  }

  return response.json();
};
