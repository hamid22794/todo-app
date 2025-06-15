// src/components/TodoList.jsx
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) return <p className="text-center text-gray-500">No tasks yet</p>;

  return (
    <div className="bg-gray-100 rounded shadow">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
