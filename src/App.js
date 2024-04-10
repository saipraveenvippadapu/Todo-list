import React, { useState } from "react";
import "./App.css";

function App() {
  let [todoInput, updateNewInput] = useState();
  let [todolist, updateTodos] = useState([
    {
      id: 1,
      task: "learn react",
    },
    {
      id: 2,
      task: "learn angular",
    },
  ]);
  let nextId = 3;
  function addNewtodo() {
    if (todoInput === "") {
      alert("insert the things to do");
    } else {
      let NewTodo = [
        ...todolist,
        {
          id: Math.random(),
          task: todoInput,
        },
      ];
      updateTodos(NewTodo);
      updateNewInput("");
    }
  }
  function deleteTodo(id) {
    debugger;
    let updatedTodos = todolist.filter((todo) => {
      return todo.id !== id;
    });
    updateTodos(updatedTodos);
  }

  return (
    <div className="container mt-5 w-60">
      <h1 className="text-center">Todo app using React</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            let task = e.target.value;
            updateNewInput(task);
          }}
          value={todoInput}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            addNewtodo();
          }}
        >
          ADD
        </button>
      </div>
      <ui className="list-group mt-4">
        {todolist.map((todo) => {
          return (
            <li className="list-group-item">
              <p>{todo.task}</p>
              <button className="btn" onClick={() => deleteTodo(todo?.id)}>
                ❌
              </button>
            </li>
          );
        })}
      </ui>
    </div>
  );
}
// function App() {
//   let [num, uNumber] = useState(100);

//   return (
//     <div>
//       <h1>{num}</h1>

//       <button>click</button>
//       <input type="text" onChange={} />
//     </div>
//   );
// }
export default App;
