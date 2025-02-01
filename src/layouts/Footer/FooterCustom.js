import styled from "styled-components";

export const FooterCustom = styled.footer`
padding-top: 74px;
padding-bottom: 64px;

text-align: center;
align-content: center;

&  > svg {
    margin-bottom: 58px;
}
`

export const IconsList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > li:not(:last-child){
    margin-right: 28px;
}
`