import { boolean, date, uuid } from "@app/core/random";
import { Todo } from "@app/openapi/todos";
import { mocked, mockedArray } from "../../core";

export const todo = mocked<Todo>({
  id: "cfcf5274-99a1-400f-a5f2-9d8e8c3a2658",
  title: "Buy milk",
  completed: false,
  createdAt: "2023-01-01T00:00:00.000Z",
  updatedAt: "2023-01-01T01:00:00.000Z",
});

export const getTodos200 = mockedArray(() =>
  todo({
    id: uuid(),
    title: "Buy milk",
    completed: boolean(),
    createdAt: date().toISOString(),
    updatedAt: date().toISOString(),
  })
);
