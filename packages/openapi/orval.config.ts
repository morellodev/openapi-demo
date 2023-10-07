import { defineConfig } from "orval";

const config = defineConfig({
  todos: {
    input: "./src/schema/todos.yaml",
    output: {
      target: "./dist/todos.ts",
      client: "react-query",
      headers: true,
      override: {
        mutator: {
          path: "./src/mutator/custom-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
});

export default config;
