import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

export default () => {
  return (
    <>
      <Container>
        <p>Selecione o horário</p>
        <Date>
          <h3>Quinta-feira - 24/06/2021</h3>
          <button>15:00</button> <button>19:00</button>
        </Date>
        <Date>
          <h3>Quinta-feira - 24/06/2021</h3>
          <button>15:00</button> <button>19:00</button>
        </Date>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
  }
`;
const Date = styled.div`
  width: 100%;
  margin-bottom: 20px;
  button {
    margin-top: 10px;
    width: 83px;
    height: 43px;
    background-color: orange;
    border-style: none;
    border-radius: 5%;
  }
`;
