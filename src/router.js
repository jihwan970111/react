import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
