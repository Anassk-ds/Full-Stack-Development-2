import React, { useState } from "react";
import About from "./About";

function App() {
  const [data, setData] = useState("Bahubali");

  function updateData() {
    setData("User");
  }

  return (
    <div>

      <h1>Props and State</h1>

      <h2>Props Example</h2>

      <About name="Bahubali" age="56" />
      <About name="Katappa" age="85" />
      <About name="Prabhas" />
      <About name="User" />

      <h2>State Example</h2>

      <h3>{data}</h3>

      <button onClick={updateData}>
        Change Data
      </button>

    </div>
  );
}

export default App;
