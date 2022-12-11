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
            <img key={a.id} src={a.posterURL} alt={a.title} />
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
