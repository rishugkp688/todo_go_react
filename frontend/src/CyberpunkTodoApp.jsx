// CyberpunkTodoApp.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "http://localhost:8000";

export default function CyberpunkTodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(`${API_URL}/todos`);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;
    await axios.post(`${API_URL}/todo`, { title, done: false });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await axios.put(`${API_URL}/todo/${todo.id}`, {
      title: todo.title,
      done: !todo.done,
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/todo/${id}`);
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-[#0f0f1b] text-[#00f7ff] font-cyber p-8">
      <h1 className="text-5xl mb-10 text-center text-[#ff00f7] neon-glow">
        🚀 CYBER TODO
      </h1>

      <div className="flex justify-center gap-4 mb-10">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type your next mission..."
          className="bg-black border-2 border-[#ff00f7] text-[#39ff14] px-6 py-2 shadow-neon focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-[#ff00f7] hover:bg-pink-600 text-black px-4 py-2 font-bold shadow-neon"
        >
          Add
        </button>
      </div>

      <ul className="space-y-4 max-w-xl mx-auto">
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1b1b2f] text-[#39ff14] px-6 py-4 flex justify-between items-center border-l-4 border-[#00f7ff] shadow-md hover:shadow-neon"
          >
            {/* 🔧 Wrap with <div> so click doesn't collide with delete button */}
            <div
              className={`cursor-pointer text-lg flex-1 ${
                todo.done ? "line-through opacity-60" : ""
              }`}
              onClick={() => toggleTodo(todo)}
            >
              {todo.title}
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-4 text-[#ff00f7] hover:text-pink-300"
            >
              ✖
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
