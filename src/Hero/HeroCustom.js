import styled from "styled-components";

import bckImage from "../assets/pics/bg-pattern-3.svg";

export const HeroCustom = styled.div`
  position: relative;

  overflow: visible;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;
  padding-bottom: 156px;

  text-align: center;
  align-content: balance;
  font-size: 32px;
  line-height: 1.25;
  font-weight: 600;
  color: #fff;
  background-color: #24053e;

  & span {
    border-bottom: 3px solid #44ffa1;
  }

  & > img {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    transform: translateY(50%) translateX(36px);

    width: 320px;
  }

  & > button {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;

    margin-top: 40px;

    font-family: "manrope";
    font-size: 16px;
    font-weight: 800;
    line-height: 2;
    letter-spacing: -0.16px;
    background-color: #44ffa1;
    color: #24053e;
  }
`;
