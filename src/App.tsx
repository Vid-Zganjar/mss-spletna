import React from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"
import About from "./About/About"
import Trgovina from "./Trgovina/Trgovina"
import Novice from "./Novice/Novice"



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trgovina" element={<Trgovina />} />
        <Route path="/novice" element={<Novice />} />
       </Routes>
    </>
  );
}

export default App;
