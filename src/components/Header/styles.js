import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const HeaderSC = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${theme.primary.fill};
  z-index: 10;

  header > div {
    text-align: right;
    padding: 0 5px 0 5px;
  }

  #searchBox {
    background-color: ${theme.primary.fill};
    border: 1px;
    border-radius: 5px;
    align-content: center;
  }

  #search {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: 0;
    align-content: flex-end;
  }

  #searchInput {
    display: none;
    height: 40px;
    width: 300px;
    border: 0px;
    border-radius: 5px;
    font-size: medium;
    padding: 10px;
    align-content: unset;
  }

  .fa-bars {
    font-size: 2em;
    color: ${theme.primary.text};
  }

  svg path {
    fill: ${theme.primary.text};
  }
`;
