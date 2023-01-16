import React from "react"
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Plants from "./routes/Plants";
import AboutMe from "./routes/AboutMe";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/plants"  element={<Plants />} />
        <Route path="/aboutme"  element={<AboutMe />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
