import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Top from "./comps/Top";
import Sections from "./comps/Sections";
import Seats from "./comps/Seats";
import Success from "./comps/Success";
import Base from "./comps/Base";

export default function() {
  const filmList = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
  const [card, setCard] = useState([]);
  const [displayFilm, setDisplayFilm] = useState(undefined);
  const [displaySeats, setDisplaySeats] = useState(undefined);
  const [displayBuyer, setDisplayBuyer] = useState(undefined);

  useEffect(() => {
    const promisse = axios.get(filmList);
    promisse.then((resposta) => setCard(resposta.data));
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top />
      <Routes>
        <Route path="/" element={<Base film={card} />} />
        <Route path="/sessoes/:idFilme" element={<Sections />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <Seats
              setDisplayFilm={setDisplayFilm}
              setDisplaySeats={setDisplaySeats}
              setDisplayBuyer={setDisplayBuyer}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <Success
              displayFilm={displayFilm}
              displaySeats={displaySeats}
              displayBuyer={displayBuyer}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
