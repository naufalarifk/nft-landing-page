import React from "react";
import Header from "./common/header/Header";
import Jumbotron from "./content/jumbotron/Jumbotron";
import Projects from "./content/projects/Projects";
import Services from "./content/services/Services";

function App() {
  return (
    <>
    <Header/>
    <Jumbotron/>
    <Services/>
    <Projects/>
    </>
  );
}

export default App;
