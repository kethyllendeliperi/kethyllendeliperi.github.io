import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: '#13111A',
  white: '#F5F5F5',
  lightGray: '#B7B4C7',
  blue: '#2D42FF',
  purple: '#6E4FE9',
  pink: '#FF4B81',
  black: '#13111A',
  gradientPurple: '#4f56ff',
  gradientPink: '#ff4980'
}

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Manrope, sans-serif;
    list-style: none;

  }

  body {
    background-color: ${colors.background};
    margin: 20px 40px;
    overflow-x: hidden;

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }
  }

  .gradient {
  background: linear-gradient(270deg, ${colors.gradientPurple}, ${colors.gradientPink});
  background-clip: text;
  color: transparent;
  }
`
