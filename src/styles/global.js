import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${theme.primary.active};
      color: ${theme.primary.text};
    }
  }

  html, body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;

    background-color: ${theme.primary.bg};
    color: ${theme.primary.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
  }

  a,
  button {
    color: ${theme.primary.text};
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  .cls-2:hover {
    fill: ${theme.primary.fill};
    cursor: pointer;
    transition: fill 0.3s ease-out;
  }

  #Camada_1 {
    height: 740px;
    width: 640px;
  }
`;
