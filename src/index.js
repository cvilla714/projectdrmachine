import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const App = () => (
  <div id="display" className="display">
    {keys.map((key, idx) => (
      <Box text={key} key={idx} />
    ))}
  </div>
);
const Box = (props) => <div className="box">{props.text}</div>;

ReactDOM.render(<App keys={keys} />, document.querySelector("#root"));
