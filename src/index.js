import React from "react";
import ReactDOM from "react-dom";
// import pi, {doublePi, triplePi} from "./math.js";
import * as Pi from "./math.js"; //wildcard disourage per convention

ReactDOM.render(
  <ul>
    <li>{Pi.default}</li>
    <li>{Pi.doublePi()}</li>
    <li>{Pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
