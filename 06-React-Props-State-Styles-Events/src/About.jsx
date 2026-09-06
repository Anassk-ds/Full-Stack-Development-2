import React from "react";

function About(props) {
  return (
    <div>
      <h3>
        About Component Created By: {props.name}
        {props.age && ` & age: ${props.age}`}
      </h3>
    </div>
  );
}

export default About;
