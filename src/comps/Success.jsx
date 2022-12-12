import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default (props) => {
  return (
    <Container>
      <h1>
        Pedido feito <br />
        com sucesso!
      </h1>
      <mvInfo data-test="movie-info">
        <h2>Filme e sessão</h2>
        <h3>{props.displayFilm.title}</h3>
        <h3>
          {props.displayFilm.sectionsDate} {props.displayFilm.sectionsTime}
        </h3>
      </mvInfo>

      <seatsInfo data-test="seats-info">
        <h2>Ingressos</h2>
        {props.displaySeats.map((a) => (
          <h3>Assento {a}</h3>
        ))}
      </seatsInfo>

      <clientInfo data-test="client-info">
        <h2>Comprador</h2>
        <h3>Nome: {props.displayBuyer.name}</h3>
        <h3>CPF: {props.displayBuyer.cpf}</h3>
      </clientInfo>

      <Link to="/">
        <button data-test="go-home-btn">Voltar pra Home</button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: column;
  flex-wrap: wrap;
  width: 100%;
  h1 {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: 110px;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247a6b;
  }
  button {
    position: sticky;
    left: calc(50% - 112.5px);
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    border-style: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
  h2 {
    margin-left: 29px;
    margin-top: 25px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
  h3 {
    margin-left: 29px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
