import { Todo, getGetTodosQueryKey, useUpdateTodo } from "@app/openapi/todos";
import { useQueryClient } from "@tanstack/react-query";
import { getTodoHtmlId } from "../utils/todos";
import { DeleteTodoButton } from "./DeleteTodoButton";

export const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const queryClient = useQueryClient();

  const updateTodo = useUpdateTodo({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries(getGetTodosQueryKey());
      },
    },
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTodo.mutate({
      id: todo.id,
      data: {
        completed: e.target.checked,
      },
    });
  };

  return (
    <div className="inline-flex items-center w-full gap-2 px-2 py-1 rounded hover:bg-gray-50 group">
      <input
        id={getTodoHtmlId(todo)}
        type="checkbox"
        className="rounded peer"
        checked={todo.completed}
        onChange={handleChange}
      />
      <label
        htmlFor={getTodoHtmlId(todo)}
        className="cursor-pointer select-none peer-checked:line-through peer-checked:text-gray-500 grow"
      >
        {todo.title}
      </label>
      <DeleteTodoButton todoId={todo.id} />
    </div>
  );
};
