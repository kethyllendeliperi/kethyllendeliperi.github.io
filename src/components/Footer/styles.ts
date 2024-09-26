import styled from "styled-components";
import { breakpoints } from "../../styles";

export const SocialMedia = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;

  h3 {
    font-size: 46px;
    margin: 40px 0;
  }

  div {
    display: flex;
    margin-top: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 40px 0;

    h3 {
      font-size: 40px;
      margin: 20px 0;
    }
  }
`

export const Contact = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background-image: linear-gradient(315deg, #434bff, #ff4b81);
  width: 50px;
  height: 50px;
  border-radius: 7px;


  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 40px;
      height: 40px;

      img {
        width: 25px;
        height: 25px;
      }
  }
`
