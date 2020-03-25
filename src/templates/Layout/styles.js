import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  body {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: x-large;
    margin: 5px;
    color: #fff;
    text-align: left;
    padding-left: 30px;
  }

  h2 {
    font-size: larger;
    margin: 10px;
    color: #888;
  }

  #float {
    float: left;
    width: 300px;
    height: 150px;

    h3 {
      font-size: 20px;
      margin: 5px;
      color: ${theme.primary.active};
    }

    h4 {
      font-size: 16px;
      margin: 5px;
      color: ${theme.primary.active};
    }
  }

  main {
    position: relative;
    text-align: center;
    padding: 0px;
    margin-top: 120px;
  }

  @media only screen and (max-width: 600px) {
    footer {
      background-color: transparent;
    }

    h1 {
      font-size: medium;
    }

    h2 {
      font-size: medium;
    }

    h3 {
      color: #888;
      font-size: x-small;
    }
  }
`;
