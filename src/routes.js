import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRouters;
