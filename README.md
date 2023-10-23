# OpenAPI Demo

This is a little demo to show how to share an OpenAPI schema between client and server in a web app.

The server exposes a REST API with CRUD operations on the `Todo` resource, and the client consumes the auto-generated functions from the same schema used by the server.

## Pre-requisites

You will need `node@20` and `pnpm` installed. Refer to the [pnpm docs](https://pnpm.io/installation) for installation instructions.

## Getting started

1. Clone the repo
2. Run `pnpm install` to install dependencies
3. Run `pnpm dev` to start the server and client

## Mocking

The `@app/mocks` package contains mocked resources and API interceptors for the client and tests, powered by [msw](https://mswjs.io).

To enable mocking in development, uncomment the following lines in [@app/client/src/main.tsx](./packages/client/src/main.tsx):

```ts
if (import.meta.env.DEV) {
  const { worker } = await import("@app/mocks/browser");
  await worker.start();
}
```
