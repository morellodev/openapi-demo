import { integer } from "@app/core/random";
import { Todo } from "@app/openapi/todos";
import { mocked, mockedArray } from "../../core";

export const todo = mocked<Todo>({
  id: 1,
  title: "Buy milk",
  completed: false,
});

export const getTodos200 = mockedArray(() => todo({ id: integer() }));
