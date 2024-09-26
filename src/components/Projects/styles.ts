import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ProjectsWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 200%;
  position: relative;

  div {
    transform: translateX(-30%);


  }

  img {
    max-width: 100%;
    height: 250px;
    text-align: center;
    border-radius: 7px;
    margin-bottom: 12px;
    flex-shrink: 0;
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.15);

    &:hover {
      transform: scale(0.90);
      transition: transform 0.4s ease;
  }
  }


  @media (max-width: ${breakpoints.tablet}) {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-items: center;

  div {
    transform: none;
  }

  img {
    width: 100%;
    height: auto;
  }
}

@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-items: center;

  div {
    transform: none;
  }

  img {
    width: 100%;
    height: auto;
  }
}

`;
