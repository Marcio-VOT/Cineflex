import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(undefined);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((resposta) => setSeats(resposta.data));
  }, []);

  if (seats === undefined) return <div>carregando</div>;
  return (
    <>
      <Container>
        <h1>Selecione o(s) assento(s) </h1>
        <SeatsContainer>
          {seats.seats.map((a) => {
            return (
              <SeatsStyle disponivel={a.isAvailable} key={a.id}>
                {a.name}
              </SeatsStyle>
            );
          })}
        </SeatsContainer>
        <SeatsContainer>
          <div>
            <SeatsStyle style={{ background: "green" }}></SeatsStyle>
            <p>selecionado</p>
          </div>
          <div>
            <SeatsStyle></SeatsStyle>
            <p>disponível</p>
          </div>
          <div>
            <SeatsStyle style={{ background: "yellow" }}></SeatsStyle>
            <p>indisponível</p>
          </div>
        </SeatsContainer>
      </Container>
      <Footer
        posterURL={seats.movie.posterURL}
        title={seats.movie.title}
        time={seats.day.weekday + " - " + seats.day.date}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
  }
`;
const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  div {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 26px;
    justify-content: center;
    align-items: center;
  }
`;

const SeatsStyle = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.disponivel ? "lightgreen" : "lightyellow"}
  border-style: none;
`;
