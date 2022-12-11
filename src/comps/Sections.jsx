import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const { idFilme } = useParams();
  let [sectionsList, setSectionsList] = useState(undefined);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    promisse.then((resposta) => {
      setSectionsList(resposta.data);
      console.log(resposta.data);
    });
  }, []);

  if (sectionsList === undefined) return <div>carregando</div>;

  return (
    <>
      <Container>
        <p>Selecione o horário</p>

        {sectionsList.days.map((a) => {
          return (
            <Date key={a.id}>
              <h3>
                {a.weekday} - {a.date}
              </h3>
              {a.showtimes.map((b) => {
                return (
                  <Link to={`/assentos/${b.id}`}>
                    <button key={b.id}>{b.name}</button>
                  </Link>
                );
              })}
            </Date>
          );
        })}
      </Container>
      <Footer posterURL={sectionsList.posterURL} title={sectionsList.title} />
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
