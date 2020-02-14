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

  header {
    display: grid;
    grid-template-columns: 10fr 1fr 1fr 1fr;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #3fb59b;
    z-index: 10;
  }

  header > div {
    text-align: right;
    padding: 0 5px 0 5px;
  }

  #search {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: 0;
  }

  #searchInput {
    display: none;
    height: 40px;
    width: 300px;
    border: 1px;
    border-radius: 5px;
    font-size: medium;
    padding: 10px;
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

  h3 {
    font-size: small;
    margin: 5px;
    color: #fff;
  }

  .fa-search,
  .fa-bars {
    font-size: 2em;
    color: #fff;
  }

  main {
    position: relative;
    text-align: center;
    padding: 0px;
    margin-top: 70px;
  }

  .map {
    width: 100%;
    height: 100%;
    padding: 0px 50px 70px 20px;
  }

  footer {
    font-weight: 400;
    margin-top: auto;
    text-align: center;
    position: fixed;
    padding: 10px;
    bottom: 0;
    width: 100%;
    background-color: #3fb59b;
    align-self: auto;
    z-index: 10;

    a {
      color: ${theme.primary.active};
    }
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
