import { useGetTodos } from "@app/openapi/todos";
import { match } from "ts-pattern";
import { TodoList } from "./TodoList";

export const Todos: React.FC = () => {
  const todos = useGetTodos();

  return match(todos)
    .with({ status: "loading" }, () => <p>Loading...</p>)
    .with({ status: "error" }, ({ refetch }) => (
      <button onClick={() => refetch()}>Retry</button>
    ))
    .with({ status: "success" }, ({ data }) => <TodoList todos={data} />)
    .exhaustive();
};
