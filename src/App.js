import React, { useState } from "react";
import "./App.css";
// function App() {
//   let [counter, updateCounter] = useState(0);
//   return (
//     <>
//       <div>
//         <button
//           id="plus"
//           onClick={() => {
//             updateCounter(++counter);
//           }}
//         >
//           +
//         </button>
//         <h1 id="ans">{counter}</h1>
//         <button
//           id="minus"
//           onClick={() => {
//             updateCounter(--counter);
//           }}
//         >
//           -
//         </button>
//       </div>
//     </>
//   );
// }
// function App() {
//   let [product, updateProduct] = useState({
//     star: "realme 6 pro",
//     price: 18000,
//   });
//   return (
//     <>
//       <h1>product:{product.star}</h1>
//       <p>price:{product.price}</p>
//       <input id="star" placeholder="Enter new product" />
//       <button
//         onClick={() => {
//           // let mprice = document.getElementById("pname").value;
//           let mproduct = document.getElementById("star").value;
//           updateProduct({
//             ...product,
//             // price: mprice,
//             star: mproduct,
//           });
//         }}
//       >
//         update
//       </button>
//       <br />
//       <br />
//       <input id="price" placeholder="Enter new price" type="number" />
//       <button
//         onClick={() => {
//           let mprice = document.getElementById("price").value;
//           updateProduct({
//             ...product,
//             price: mprice,
//           });
//         }}
//       >
//         update
//       </button>
//     </>
//   );
// }
// function App() {
//   return (
//     <>
//       <div id="wrapper">
//         <h1>hi</h1>
//         <input
//           type="color"
//           onChange={(e) => {
//             document.body.style.background = e.target.value;
//           }}
//         />
//       </div>
//     </>
//   );
// }
// function App() {
//   let [product, updateProduct] = useState(0);
//   let stock = 15;
//   return (
//     <>
//       <div id="wrapper">
//         <button
//           id="minus"
//           disabled={product === 0}
//           onClick={() => {
//             if (stock > 0) {
//               updateProduct(--product);
//             }
//           }}
//         >
//           -
//         </button>
//         <p>{product}</p>
//         <button
//           id="plus"
//           disabled={product === 25}
//           onClick={() => {
//             if (stock > 0) {
//               updateProduct(++product);
//             }
//           }}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }
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
