import { boolean, uuid } from "@app/core/random";

const INITIAL_TODOS = [
  "Buy milk",
  "Learn OpenAPI",
  "Learn Orval",
  "Walk the dog",
  "Go to the gym",
];

const todos = INITIAL_TODOS.map((title) => {
  return {
    id: uuid(),
    title,
    completed: boolean(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
});

export const db = {
  todos,
};
