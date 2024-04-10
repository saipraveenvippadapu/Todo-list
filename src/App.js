import React, { useState } from "react";
import "./App.css";
function App() {
  let [product, updateProduct] = useState(0);
  let stock = 15;
  return (
    <>
      <div id="wrapper">
        <br />
        <button
          id="minus"
          disabled={product === 0}
          onClick={() => {
            if (stock > 0) {
              updateProduct(--product);
            }
          }}
        >
          -
        </button>
        <p>{product}</p>
        <button
          id="plus"
          disabled={product === 25}
          onClick={() => {
            if (stock > 0) {
              updateProduct(++product);
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
