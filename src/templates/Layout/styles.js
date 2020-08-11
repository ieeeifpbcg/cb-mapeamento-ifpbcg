import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: x-large;
    color: #fff;
  }

  h2 {
    font-size: larger;
    margin: 10px;
    color: #888;
  }

  #float-window {
    position: absolute;
    display: none;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
    margin-bottom: 100px;
  }
`;
