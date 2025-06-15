// src/context/TodoContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
