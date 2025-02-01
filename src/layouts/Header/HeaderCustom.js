import styled from "styled-components";

export const HeaderCustom = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;

  background-color: #24053e;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 32px;
  }

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
