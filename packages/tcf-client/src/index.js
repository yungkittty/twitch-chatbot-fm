import React from "react";
import ReactDOM from "react-dom";
import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";
import App from "./app";
import * as serviceWorker from "./service-worker";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
