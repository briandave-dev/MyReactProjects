import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Index from "./components/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
