import { Todo, getGetTodosQueryKey, useDeleteTodo } from "@app/openapi/todos";
import { useQueryClient } from "@tanstack/react-query";

export const DeleteTodoButton: React.FC<{ todoId: Todo["id"] }> = ({
  todoId,
}) => {
  const queryClient = useQueryClient();

  const deleteTodo = useDeleteTodo({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries(getGetTodosQueryKey());
      },
    },
  });

  const handleClick = () => {
    if (deleteTodo.isLoading) return;
    deleteTodo.mutate({ id: todoId });
  };

  return (
    <button
      aria-disabled={deleteTodo.isLoading}
      onClick={handleClick}
      className="px-1 text-sm font-medium text-red-600 bg-white border border-red-600 rounded select-none hover:bg-red-50 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-red-500/50"
    >
      Delete
    </button>
  );
};
