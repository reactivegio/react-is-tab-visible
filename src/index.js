import ReactDOM from "react-dom";
import React from "react";
import Video from "./components/Video";

import "./style.scss";

const App = () => {
  return <Video />;
};
ReactDOM.render(<App />, document.getElementById("app"));
