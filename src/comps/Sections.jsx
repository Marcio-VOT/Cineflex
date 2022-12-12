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
            <Date data-test="movie-day" key={a.id}>
              <h3>
                {a.weekday} - {a.date}
              </h3>
              {a.showtimes.map((b) => {
                return (
                  <Link to={`/assentos/${b.id}`}>
                    <button data-test="showtime" key={b.id}>
                      {b.name}
                    </button>
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
  margin-bottom: 117px;
  p {
    display: flex;
    width: 100%;
    height: 110px;
    justify-content: center;
    align-items: center;
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
const Date = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-left: 23px;
  button {
    margin-top: 22px;
    width: 83px;
    height: 43px;
    background-color: orange;
    border-style: none;
    border-radius: 3%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    margin-right: 8px;
    color: #ffffff;
  }
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;
  }
`;
