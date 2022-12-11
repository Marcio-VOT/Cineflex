import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

export default () => {
  return (
    <>
      <Container>
        <h1>Selecione o(s) assento(s) </h1>
        <SeatsStyle>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
        </SeatsStyle>
        <SeatsStyle>
          <div>
            <button style={{ background: "green" }}></button>
            <p>selecionado</p>
          </div>
          <div>
            <button></button>
            <p>disponível</p>
          </div>
          <div>
            <button style={{ background: "yellow" }}></button>
            <p>indisponível</p>
          </div>
        </SeatsStyle>
      </Container>
      <Footer />
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
const SeatsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  button {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: lightgray;
    border-style: none;
  }
  div {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 26px;
    justify-content: center;
    align-items: center;
  }
`;
