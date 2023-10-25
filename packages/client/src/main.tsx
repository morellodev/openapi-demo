import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Providers } from "./Providers";

// eslint-disable-next-line @typescript-eslint/require-await
async function main() {
  // if (import.meta.env.DEV) {
  //   const { worker } = await import("@app/mocks/browser");
  //   await worker.start();
  // }

  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("No root element found");

  createRoot(rootElement).render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>
  );
}

main().catch(console.error);
