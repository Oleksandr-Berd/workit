import styled from "styled-components";

export const MeritsListCustom = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 155px;
  padding-bottom: 72px;

  text-align: center;

  background-color: #fcf8ff;

  @media (min-width: 768px) {
    padding-left: 98px;
    padding-right: 98px;
    padding-top: 203px;
    padding-bottom: 104px;

    text-align: left;

    & li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  & > li:not(:last-child) {
    margin-bottom: 40px;
  }

  & div:first-child {
      min-width: 48px;
      height: 46px;

    display: inline-block;

    align-content: center;

    text-align: center;

    margin-bottom: 24px;

    font-family: "fraunces";
    font-weight: 700;
    font-size: 24px;
    line-height: 1.67;

    border: 1px solid #584d62;
    border-radius: 50%;

    @media (min-width: 768px){
      margin-right: 32px;
      margin-bottom: 0;
    }
  }

  & h4 {
    margin-bottom: 16px;

    font-size: 28px;
    line-height: 1.29;
    color: #24053e;
  }

  & p {
    color: #584d62;
    font-size: 16px;
    line-height: 1.65;
    opacity: 0.7;
  }
`;
