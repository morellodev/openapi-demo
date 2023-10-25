import { useGetTodos } from "@app/openapi/todos";
import { match } from "ts-pattern";
import { getCompletedTodosCount } from "../utils/todos";

export const TodosCount: React.FC = () => {
  // We should use same query params as in Todos.tsx to dedupe requests
  const todos = useGetTodos({
    _sort: ["completed", "createdAt"],
    _order: ["asc", "desc"],
  });

  return match(todos)
    .with({ status: "success" }, ({ data }) => (
      <div role="status" className="text-sm text-gray-500">
        <span className="tabular-nums">{getCompletedTodosCount(data)}</span> of{" "}
        <span className="tabular-nums">{data.length}</span> tasks done
      </div>
    ))
    .otherwise(() => null);
};
