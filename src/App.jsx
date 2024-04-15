import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Miss from "./components/Miss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Miss />
      {/* <NavBar />
      <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
