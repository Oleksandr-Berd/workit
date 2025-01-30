import styled from "styled-components";

export const HeaderCustom = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #24053e;

  & > button {
    font-family: "manrope";
    font-weight: 700;
    font-size: 16px;
    line-height: 2;
    letter-spacing: -0.16px;
    background-color: transparent;
    color: #fff;

    border-bottom: 3px solid #44ffa1;
  }
`;
