import { useGetTodos } from "@app/openapi/todos";
import { match } from "ts-pattern";
import { TodoList } from "./TodoList";

export const Todos: React.FC = () => {
  const todos = useGetTodos({
    _sort: ["completed", "createdAt"],
    _order: ["asc", "desc"],
  });

  return match(todos)
    .with({ status: "pending" }, () => <p>Loading...</p>)
    .with({ status: "error" }, ({ refetch }) => (
      <button onClick={() => refetch()}>Retry</button>
    ))
    .with({ status: "success" }, ({ data }) => <TodoList todos={data} />)
    .exhaustive();
};
