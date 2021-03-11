import { createElement } from "react";

const Pet = ({ name, animal, breed }) => {
  return createElement("div", {}, [
    createElement("h2", {}, name),
    createElement("h3", {}, animal),
    createElement("h3", {}, breed),
  ]);
};

export default Pet;
