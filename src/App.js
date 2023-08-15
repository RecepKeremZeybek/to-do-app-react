import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";


const todoList =[
  {
    id:1,
    text:"React ile TodoList uygulaması",
    completed:false,
  },
  {
    id:2,
    text:"JavaScript çalışmalısın",
    completed:false,
  }
]
function App() {
  const [todos, setTodos] = useState(todoList);
  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
