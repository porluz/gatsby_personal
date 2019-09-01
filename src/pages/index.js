import React from "react";
import Layout from '../components/Layout.js'
import Home from '../components/Home.js'

function HomePage() {
  return (
    <Layout pageContent={<Home />}/>
  );
}
export default HomePage;
