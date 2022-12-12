import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <FooterStyle data-test="footer">
      <img src={props.posterURL} />
      <div>
        <h1>{props.title}</h1>
        <h1>{props.time ? props.time : ""}</h1>
      </div>
    </FooterStyle>
  );
};
const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 117px;
  align-items: center;
  padding-left: 10px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  img {
    width: 64px;
    height: 89px;
    border: solid 8px #ffffff;
    margin-right: 14px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
  }
`;
