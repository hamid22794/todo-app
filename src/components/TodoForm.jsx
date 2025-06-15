import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Task cannot be empty.");
      return;
    }

    addTodo(text);
    setText("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 mb-4"
    >
      <div className="flex w-full max-w-md">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          className="flex-grow p-2 border rounded-l outline-none"
          placeholder="Enter a task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default TodoForm;
