import styled from "styled-components";

import ownerPic from "../assets/pics/image-founder.webp";

export const ApplyContainer = styled.div`
  padding-top: 329px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    padding-right: 40px;
    padding-left: 0;
  }
`;

export const ContentCon = styled.div`
  position: relative;

  &::before {
    content: " ";

    position: absolute;

    top: 0;
    left: 0;
    z-index: -1;

    width: 281px;
    height: 281px;

    transform: translateY(-80%) translateX(31px);

    background-image: url(${ownerPic});
    background-image: url(${ownerPic});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  padding-left: 31px;
  padding-right: 31px;
  padding-top: 32px;
  padding-bottom: 32px;

  text-align: center;

  background-color: #24053e;
  color: #fff;

  @media (min-width: 768px) {
    width: 514px;

    text-align: left;
  }

  & > h3 {
    margin-bottom: 16px;

    font-size: 32px;
    line-height: 1.5;
  }

  & > p {
    margin-bottom: 24px;

    font-size: 16px;
    line-height: 1.75;
  }

  & > button {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;

    font-family: "manrope";
    font-size: 16px;
    font-weight: 800;
    line-height: 2;
    letter-spacing: -0.16px;
    background-color: #44ffa1;
    color: #24053e;
  }
`;
