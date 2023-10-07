import { Todo } from "@app/openapi/todos";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos: posts }) => {
  return (
    <ul>
      {posts.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
