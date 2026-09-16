import React, { useState } from "react";

function App() {

  const [data, setData] = useState(0);

  function onclickUpdate() {
    setData(data + 1);
  }

  function handleMouseEnter() {
    setData(data + 1);
  }

  function reset() {
    setData(0);
  }

  return (
    <div>

      <h1>{data}</h1>

      <button onClick={onclickUpdate}>
        onClick Update
      </button>

      <button onMouseEnter={handleMouseEnter}>
        Mouse Enter
      </button>

      <button onClick={reset}>
        Reset
      </button>

    </div>
  );
}

export default App;
