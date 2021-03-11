import React from "react";
import ReactDOM from "react-dom";

import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {}, // for attributes
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockateil",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mix",
      }),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
