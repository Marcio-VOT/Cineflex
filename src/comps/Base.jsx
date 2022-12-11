import React from "react";
import styled from "styled-components";

export default () => {
  let imagem =
    "https://br.web.img2.acsta.net/pictures/20/08/18/16/25/0872062.jpg";
  return (
    <>
      <Container>
        <p>Selecione o filme</p>
        <img src={imagem} />
        <img src={imagem} />
        <img src={imagem} />
        <img src={imagem} />
        <img src={imagem} />
        <img src={imagem} />
        <img src={imagem} />
        <img src={imagem} />
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  img {
    margin-top: 19px;
    width: 145px;
    height: 209px;
    border: solid 8px grey;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
`;
