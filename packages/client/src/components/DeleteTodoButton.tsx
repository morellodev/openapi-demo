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
    deleteTodo.mutate({ id: todoId });
  };

  return (
    <button
      disabled={deleteTodo.isLoading}
      onClick={handleClick}
      className="px-1 text-sm font-medium text-red-600 bg-white border border-red-600 rounded select-none hover:bg-red-50"
    >
      Delete
    </button>
  );
};
