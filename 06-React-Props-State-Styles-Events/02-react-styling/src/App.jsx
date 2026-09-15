import React from "react";

import "./index.css";

function App() {

  const internalCss = {
    color: "green",
    backgroundColor: "yellow",
    margin: "20px",
    border: "2px solid red",
    padding: "10px"
  };

  return (
    <div>

      <h1
        style={{
          color: "red",
          backgroundColor: "pink",
          padding: "10px"
        }}
      >
        CSS Inline Way
      </h1>

      <h2 style={internalCss}>
        CSS Internal Way
      </h2>

      <h3 className="external-style">
        External Way of CSS - Some Content
      </h3>

    </div>
  );
}

export default App;
