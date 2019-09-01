import React from "react";
import ReactDOM from "react-dom";
import SideMenu from './SideMenu'
import "./styles.css";
import "./main.js";

function App() {
  return (
    <SideMenu />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
