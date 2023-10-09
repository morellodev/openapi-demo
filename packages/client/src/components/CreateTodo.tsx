import { getGetTodosQueryKey, useCreateTodo } from "@app/openapi/todos";
import { useQueryClient } from "@tanstack/react-query";

export const CreateTodo: React.FC = () => {
  const queryClient = useQueryClient();

  const createTodo = useCreateTodo({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries(getGetTodosQueryKey());
      },
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (createTodo.isLoading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoTitle = formData.get("todoText")?.toString().trim();

    if (!todoTitle) return;

    createTodo.mutate(
      {
        data: {
          title: todoTitle,
          completed: false,
        },
      },
      {
        onSuccess: () => {
          form.reset();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          name="todoText"
          required
          placeholder="I need to..."
          className="w-full rounded"
        />
        <button
          type="submit"
          aria-disabled={createTodo.isLoading}
          className="absolute inset-0 left-auto px-4 font-semibold text-white bg-blue-600 rounded-tr rounded-br hover:bg-blue-500 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-blue-500/50"
        >
          Add
        </button>
      </div>
    </form>
  );
};
