import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Providers } from "./Providers";

async function main() {
  // if (import.meta.env.DEV) {
  //   const { worker } = await import("@app/mocks/browser");
  //   await worker.start();
  // }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>
  );
}

main();
