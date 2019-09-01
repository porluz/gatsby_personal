import React from "react";
import ReactDOM from "react-dom";
import SideMenu from './SideMenu';
import "./normalize.css";
import "./reset.css";
import "./styles.css";

function App() {
  return (
    <SideMenu />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
