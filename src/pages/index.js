import React from "react";
import SideMenu from '../components/SideMenu.js'
import Home from '../components/Home.js'

import "../styles.css";

function HomePage() {
  return (
    <SideMenu pageContent={<Home />}/>
  );
}
export default HomePage;
