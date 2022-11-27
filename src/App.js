import React from "react";
import "./styles.css";

// import User from "./user";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <User name="vivek" surname="umap" />
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h1>Hello user</h1>
      <h2>{props.name}</h2>
      <h2>{props.surname}</h2>
    </div>
  );
}
