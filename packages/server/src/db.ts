import { boolean } from "@app/core/random";

const INITIAL_TODOS = [
  "Buy milk",
  "Learn OpenAPI",
  "Learn Orval",
  "Walk the dog",
  "Go to the gym",
];

const todos = INITIAL_TODOS.map((title, i) => {
  return {
    id: i + 1,
    title,
    completed: boolean(),
  };
});

export const db = {
  todos,
};
