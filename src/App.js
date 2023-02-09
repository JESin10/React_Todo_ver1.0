import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, content: "퀴즈 제출하기" },
    { id: 2, content: "리액트 공부하기" },
  ]);
  return (
    <div className="todoilst-main">
      <input className="inputbox" 
        type="text"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button className="addbtn"
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, content: content }]);
        }}
      > 추가하기 </button>

      <h1>Todo List</h1>
      <div className="all-todolist">
        {todos.map((todo) => (
          <div className="todolist" key={todo.id}>
            {todo.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;