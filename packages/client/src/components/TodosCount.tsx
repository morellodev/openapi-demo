import { useGetTodos } from "@app/openapi/todos";
import { match } from "ts-pattern";
import { getCompletedTodosCount } from "../utils/todos";

export const TodosCount: React.FC = () => {
  const todos = useGetTodos();

  return match(todos)
    .with({ status: "success" }, ({ data }) => (
      <div role="status" className="text-sm text-gray-500">
        <span className="tabular-nums">{getCompletedTodosCount(data)}</span> of{" "}
        <span className="tabular-nums">{data.length}</span> tasks done
      </div>
    ))
    .otherwise(() => null);
};
