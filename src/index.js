import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "div",
  { id: "main", className: "container" },
  "Hello world!"
);

ReactDOM.render(element, document.getElementById("root"));
