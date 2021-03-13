import { combineReducers } from "redux";
import location from "./location.js";
import theme from "./theme.js";
import animal from "./animal.js";
import breed from "./breed.js";

export default combineReducers({
  location,
  theme,
  animal,
  breed,
});
