import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./comps/Top";
import Sections from "./comps/Sections";
import Seats from "./comps/Seats";
import Success from "./comps/Success";
import Base from "./comps/Base";

export default function() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/sessoes" element={<Sections />} />
        <Route path="/assentos" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
