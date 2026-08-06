import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-blue-950 bg-cover h-full w-full flex flex-col items-center text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
