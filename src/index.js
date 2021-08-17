import ReactDOM from "react-dom";
import React from "react";
import Fullscreen from "./components/fullscreen";

import "./style.scss";

const App = () => {
  return <Fullscreen />;
};
ReactDOM.render(<App />, document.getElementById("app"));
