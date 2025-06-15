// src/App.jsx
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-6">To-do App 📝</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
