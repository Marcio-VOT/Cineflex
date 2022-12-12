import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  return (
    <TopStyled>
      <p>CINEFLEX</p>
    </TopStyled>
  );
};

const TopStyled = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
  }
`;
