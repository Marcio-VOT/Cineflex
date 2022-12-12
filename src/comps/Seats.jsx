import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default (props) => {
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
  const [seatNumber, setSeatNumber] = useState([]);

  function reservSeats(event) {
    event.preventDefault();
    if (assento[0] === undefined) {
      return 0;
    } else {
      const promisse = axios.post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        {
          ids: assento,
          name: name,
          cpf: cpf,
        }
      );
      props.setDisplayFilm({
        title: seats.movie.title,
        sectionsDate: seats.day.date,
        sectionsTime: seats.name,
      });
      props.setDisplaySeats(seatNumber);
      props.setDisplayBuyer({
        name: name,
        cpf: cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
      });
      promisse.then(() => navigate("/sucesso"));
      promisse.catch(() => console.log("deu merda mané"));
    }
  }
  function workOnColor(a) {
    assento.includes(a.id)
      ? setAssento(assento.filter((id) => id != a.id))
      : setAssento([...assento, a.id]);
    seatNumber.includes(a.name)
      ? setSeatNumber(seatNumber.filter((name) => name != a.name))
      : setSeatNumber([...seatNumber, a.name]);
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
                data-test="seat"
                color={assento.includes(a.id) ? "#1AAE9E" : "#C3CFD9"}
                border={assento.includes(a.id) ? "#0E7D71" : "#7B8B99"}
                disponivel={a.isAvailable}
                key={a.id}
                onClick={() => {
                  a.isAvailable
                    ? workOnColor(a)
                    : alert("Esse assento não está disponível");
                }}
              >
                {a.name}
              </SeatsStyle>
            );
          })}
        </SeatsContainer>
        <Guide />
      </Container>
      <FormData onSubmit={reservSeats}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          data-test="client-name"
          placeholder="Digite seu nome..."
          type="text"
          id="name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          data-test="client-cpf"
          placeholder="Digite seu CPF..."
          type="number"
          id="cpf"
          min={10000000000}
          required={true}
          value={cpf}
          onChange={(e) => setCpf(e.target.value.slice(0, 11))}
        />
        <button type="submit">Reservat assento(s)</button>
      </FormData>
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
        <SeatsStyle
          style={{ background: "#1AAE9E", borderColor: "#0E7D71" }}
        ></SeatsStyle>
        <p>selecionado</p>
      </div>
      <div>
        <SeatsStyle
          style={{ background: "#C3CFD9", borderColor: "#7B8B99" }}
        ></SeatsStyle>
        <p>disponível</p>
      </div>
      <div>
        <SeatsStyle style={{ background: "#FBE192" }}></SeatsStyle>
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
const FormData = styled.form`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 42px;

  label {
    margin-top: 7px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
  }
  input {
    width: 100%;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #afafaf;
  }
  button {
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    margin-left: calc(50% - 112.5px);
    margin-top: 57px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    border-style: none;
    color: #ffffff;
  }
`;
const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  margin-left: 24px;
  margin-right: 16px;
  div {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 33px;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }
`;

const SeatsStyle = styled.button`
  margin-right: 7px;
  margin-bottom: 8px;
  width: 26px;
  height: 26px;
  border: 1px solid ${(props) => (props.disponivel ? props.border : "#F7C52B")};
  border-radius: 12px;
  background-color: ${(props) => (props.disponivel ? props.color : "#FBE192")};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
`;
