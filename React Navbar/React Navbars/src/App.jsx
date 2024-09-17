import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Animated Tab Bar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="flex h-16 gap-2 mb-20  items-center px-4 md:px-6">
        <Link
          className="  custom-border  p-2 rounded-lg font-bold"
          to="/React_Navbar"
        >
          React Navbar
        </Link>
      </div>
      <Routes>
        <Route path="/React_Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;
