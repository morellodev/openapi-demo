import { Todo } from "@app/openapi/todos";
import { LayoutGroup, motion } from "framer-motion";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul>
      <LayoutGroup>
        {todos.map((todo) => (
          <motion.li key={todo.id} layout>
            <TodoItem todo={todo} />
          </motion.li>
        ))}
      </LayoutGroup>
    </ul>
  );
};
