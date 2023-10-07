import { Todo, getGetTodosQueryKey, useUpdateTodo } from "@app/openapi/todos";
import { useQueryClient } from "@tanstack/react-query";
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
    <label className="inline-flex items-center w-full gap-2 px-2 py-1 rounded cursor-pointer group hover:bg-gray-50">
      <input
        type="checkbox"
        className="rounded peer"
        checked={todo.completed}
        onChange={handleChange}
      />
      <span className="select-none peer-checked:line-through peer-checked:text-gray-500 grow">
        {todo.title}
      </span>
      <div className="hidden group-hover:block">
        <DeleteTodoButton todoId={todo.id} />
      </div>
    </label>
  );
};
