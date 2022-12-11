import React from "react";
import styled from "styled-components";

export default () => {
  let imagem =
    "https://br.web.img2.acsta.net/pictures/20/08/18/16/25/0872062.jpg";
  return (
    <FooterStyle>
      <img src={imagem} />
      <div>
        <h1>Nome do filme</h1>
        <h1>Horário, caso esteja na tela assentos</h1>
      </div>
    </FooterStyle>
  );
};
const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 117px;
  align-items: center;
  padding-left: 10px;
  background-color: lightgray;
  img {
    width: 64px;
    height: 89px;
    border: solid 8px grey;
    margin-right: 14px;
  }
`;
