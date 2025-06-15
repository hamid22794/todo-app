import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
            className="border px-2 py-1 rounded"
            autoFocus
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
