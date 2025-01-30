import styled from "styled-components";

import bckImage from "../assets/pics/bg-pattern-3.svg";

export const HeroCustom = styled.div`
  position: relative;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;
  padding-bottom: 252px;

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

    transform: translateY(50%) translateX(36px);

    width: 320px;
  }
`;
