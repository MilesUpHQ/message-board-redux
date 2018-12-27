import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Root from "./Root";

const hardCoded = {
  posts: [
    { id: 1, title: "Title from test case" },
    { id: 2, title: "title 2 from test case" }
  ]
};

ReactDOM.render(
  <Root intialState={hardCoded}>
    <App />
  </Root>,
  document.getElementById("root")
);
