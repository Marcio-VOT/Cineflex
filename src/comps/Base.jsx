import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default (props) => {
  return (
    <Container>
      <p>Selecione o filme</p>
      {props.film.map((a) => {
        return (
          <Link to={"/sessoes/" + a.id}>
            <img data-test="movie" key={a.id} src={a.posterURL} alt={a.title} />
          </Link>
        );
      })}
    </Container>
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
    border: solid 8px #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
`;
