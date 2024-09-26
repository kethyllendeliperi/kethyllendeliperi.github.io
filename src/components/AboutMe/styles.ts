import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.div`
  padding: 40px 20px 40px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 70px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

export const Name = styled.h1`
  font-size: 90px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 50px;
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 35px;
  }
`
export const JobTitle = styled.h2`
  font-size: 30px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`
