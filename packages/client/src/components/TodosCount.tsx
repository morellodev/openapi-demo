import { useGetTodos } from "@app/openapi/todos";
import { match } from "ts-pattern";
import { getTodoHtmlId } from "../utils/todos";

export const TodosCount: React.FC = () => {
  const todos = useGetTodos();

  return match(todos)
    .with({ status: "success" }, ({ data }) => {
      const todoIds = data.map(getTodoHtmlId).join(" ");
      const completedTodos = data.filter((todo) => todo.completed);

      return (
        <div className="text-sm text-gray-500">
          <output htmlFor={todoIds}>
            {completedTodos.length} of {data.length} tasks done
          </output>
        </div>
      );
    })
    .otherwise(() => null);
};
