import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default () => {
  return (
    <Container>
      <h1>
        Pedido feito <br />
        com sucesso!
      </h1>

      <h2>Filme e sessão</h2>
      <h3>Enola Homes</h3>
      <h3>00/00/00 00:00</h3>

      <h2>Ingressos</h2>
      <h3>Assento xx</h3>
      <h3>Assento xx</h3>

      <h2>Comprador</h2>
      <h3>Nome: Meu Nome Sla</h3>
      <h3>CPF: 000.000.000-00</h3>

      <button>Voltar pra Home</button>
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
  }
  button {
    position: sticky;
    left: calc(50% - 112.5px);
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background-color: orange;
  }
`;
