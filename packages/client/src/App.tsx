import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./index.css";

export const App: React.FC = () => {
  return (
    <main className="max-w-screen-lg px-4 py-8 mx-auto">
      <h1 className="pb-6 text-3xl font-bold">Todo App</h1>
      <div className="space-y-4">
        <CreateTodo />
        <Todos />
      </div>
    </main>
  );
};
