import styled from "styled-components";

import bckImage from "../assets/pics/bg-pattern-3.svg";
import bckImage2 from "../assets/pics/bg-pattern-2.svg";


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

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 97px;
    padding-top: 56px;
    padding-bottom: 204px;

    font-size: 60px;
    line-height: 1;

    &::before {
      position: absolute;

      top: 0;
      left: 0;

      transform: translateX(-130px) translateY(50%);

      content: url(${bckImage});
    }

    &::after {
      position: absolute;

      top: 0;
      right: 0;

      transform: translateX(97px) translateY(100%);

      content: url(${bckImage2});
    }
  }

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

    @media (min-width: 728px) {
      width: 514px;

      transform: translateY(50%) translateX(151px);
    }
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
