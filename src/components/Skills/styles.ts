import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  h3 {
    font-size: 68px;
    text-align: center;
    margin: 40px 0;
    letter-spacing: 1px;
  }

  p {
    font-size: 20px;
    color: ${colors.white};
    margin-top: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 20px;

    h3 {
      font-size: 40px;
    }

    p {
      font-size: 15px;
      text-align: center;
    }
  }
`

export const Card = styled.div`
  border-radius: 7px;
  margin-bottom: 12px;
  width: 80%;
  opacity:2;
  box-shadow: 12px 12px 12px 10px rgba(0, 0, 0, 0.4);
`

export const Container = styled.div`
  margin-bottom: 50px;

  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    transition: opacity 0.5s ease, height 0.5s ease;
    justify-items: center;
  }
`
