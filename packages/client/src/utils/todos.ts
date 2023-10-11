import { Todo } from "@app/openapi/todos";

const TODO_HTML_ID_PREFIX = "todo-";

export function getTodoHtmlId(todo: Todo) {
  return `${TODO_HTML_ID_PREFIX}${todo.id}` as const;
}
