import { rest } from "msw";
import { getTodos200, todo } from "./mocks/todos/todos";
import { getFullUrl } from "./utils";

export const handlers = [
  rest.get(getFullUrl("/todos"), (_req, res, ctx) =>
    res(ctx.delay(), ctx.json(getTodos200()))
  ),
  rest.get(getFullUrl("/todos/:id"), (_req, res, ctx) =>
    res(ctx.delay(), ctx.json(todo()))
  ),
];
