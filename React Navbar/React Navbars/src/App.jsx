import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Animated Tab Bar/Navbar";
import "./App.css";
import { FramerMotion } from "./Framer Motion Navbar/FramerMotion";

const App = () => {
  return (
    <div>
      <div className="flex h-16 gap-2 mb-20 flex-col items-center px-4 md:px-6">
        <Link
          className="  custom-border mb-2 p-2 rounded-lg font-bold"
          to="/home"
        >
          Home
        </Link>
        <div className="flex gap-2">
          <Link
            className="  custom-border  p-2 rounded-lg font-bold"
            to="/React_Navbar"
          >
            React Navbar
          </Link>
          <Link
            className="  custom-border  p-2 rounded-lg font-bold"
            to="/Framer_motion_navbar"
          >
            Framer Motion Navbar
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/home" />
        <Route path="/React_Navbar" element={<Navbar />} />
        <Route path="/Framer_motion_navbar" element={<FramerMotion />} />
      </Routes>
    </div>
  );
};

export default App;
