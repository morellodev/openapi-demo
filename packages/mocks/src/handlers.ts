import { HttpResponse, http } from "msw";
import { getTodos200, todo } from "./mocks/todos/todos";
import { getFullUrl } from "./utils";

export const handlers = [
  http.get(getFullUrl("/todos"), () => HttpResponse.json(getTodos200())),
  http.get(getFullUrl("/todos/:id"), () => HttpResponse.json(todo())),
];
