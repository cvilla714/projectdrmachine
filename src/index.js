import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const App = () => <div className="text-center"> Hello you are in React!</div>;

ReactDOM.render(<App />, document.querySelector("#root"));
