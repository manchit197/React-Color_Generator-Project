import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [number, setNumber] = useState("");
  const [list, setList] = useState(new Values("#e3fdfd").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let int = parseInt(number);
      let colors = new Values(color).all(int);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#e3fdfd"
            className={error ? "error" : null}
          />
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="100% divided by?"
            className="input-number"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
