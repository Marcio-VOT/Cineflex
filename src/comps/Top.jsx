import React from "react";
import styled from "styled-components";

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
  background-color: lightgray;
  align-items: center;
  justify-content: center;
  p {
    color: orange;
  }
`;
