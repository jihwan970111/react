import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Test from "./pages/Test";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
