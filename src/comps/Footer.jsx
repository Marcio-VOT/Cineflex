import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <FooterStyle>
      <img src={props.posterURL} />
      <div>
        <h1>{props.title}</h1>
        <h1>{props.time ? props.time : ""}</h1>
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
