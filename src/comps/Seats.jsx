import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default () => {
  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((resposta) => setSeats(resposta.data));
  }, []);
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(undefined);
  const [assento, setAssento] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState(undefined);
  const navigate = useNavigate();

  function reservSeats(event) {
    event.preventDefault();
    const promisse = axios.post(
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
      {
        ids: assento,
        name: name,
        cpf: cpf,
      }
    );
    promisse.then(() => navigate("/sucesso"));
    promisse.catch(() => console.log("deu merda mané"));
  }

  if (seats === undefined) return <div>carregando</div>;

  return (
    <>
      <Container>
        <h1>Selecione o(s) assento(s) </h1>
        <SeatsContainer>
          {seats.seats.map((a) => {
            return (
              <SeatsStyle
                cor={assento.includes(a.id) ? "lightgreen" : "ligthgray"}
                disponivel={a.isAvailable}
                key={a.id}
                onClick={() => {
                  assento.includes(a.id)
                    ? setAssento(assento.filter((id) => id != a.id))
                    : setAssento([...assento, a.id]);
                }}
              >
                {a.name}
              </SeatsStyle>
            );
          })}
        </SeatsContainer>
        <Guide />
        <form onSubmit={reservSeats}>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button type="submit">Reservat assento(s)</button>
        </form>
      </Container>
      <Footer
        posterURL={seats.movie.posterURL}
        title={seats.movie.title}
        time={seats.day.weekday + " - " + seats.day.date}
      />
    </>
  );
};
function Guide() {
  return (
    <SeatsContainer>
      <div>
        <SeatsStyle style={{ background: "green" }}></SeatsStyle>
        <p>selecionado</p>
      </div>
      <div>
        <SeatsStyle style={{ background: "lightgray" }}></SeatsStyle>
        <p>disponível</p>
      </div>
      <div>
        <SeatsStyle style={{ background: "yellow" }}></SeatsStyle>
        <p>indisponível</p>
      </div>
    </SeatsContainer>
  );
}

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
const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  div {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 26px;
    justify-content: center;
    align-items: center;
  }
`;

const SeatsStyle = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border-style: none;
  background-color: ${(props) =>
    props.disponivel ? props.cor : "lightyellow"};
`;
