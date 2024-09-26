import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HeaderBar = styled.header`
  margin: 40px 0;
  border-radius: 8px 8px 0 0;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 120px;
    height: 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
  display: flex;
  flex-direction: column-reverse;

  img {
    opacity: 0;
    width: 10px;
    height: 10px;
  }
}
`

export const HeaderOptions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 10px;
  text-decoration: none;
`

export const HeaderItems = styled.li`
  position: relative;
  margin-right: 12px;
  padding: 12px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 60px;
  border: 2px  solid transparent;

  &:hover {
    color: ${colors.pink};
    transition: .5s;
  }

  &::before {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  z-index: -1;
  background-image: linear-gradient(255deg, ${colors.pink}, ${colors.purple});
  border-radius: 1.75rem;
}

@media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`
