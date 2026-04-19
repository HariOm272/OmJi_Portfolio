import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import TechStacks from "./Pages/TechStacks";
import Projects from "./Pages/Projects";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techstacks" element={<TechStacks />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/tech" element={<h1>Tech Stacks</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
