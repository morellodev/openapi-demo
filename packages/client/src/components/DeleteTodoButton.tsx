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
      aria-label="Delete"
      onClick={handleClick}
      className="px-2 font-mono font-medium text-gray-400 rounded select-none group-hover:text-gray-500 hover:text-gray-600 hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-gray-500/50"
    >
      &times;
    </button>
  );
};
