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

  .fa-bars {
    font-size: 2em;
    color: ${theme.primary.text};
  }
`;

export const SearchBox = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 53px;
  transition: 0.4s linear;
  overflow: hidden;

  input {
    display: block;
    appearance: none;
    width: 100%;

    border: none;
    outline: none;
    border-radius: 15px;

    background-color: ${theme.primary.fill};

    padding: 15px;
    color: ${theme.primary.fill};
    font-size: 20px;
    cursor: pointer;
    transition: 0.6s linear;

    &::placeholder {
      color: ${theme.primary.fill};
    }
  }

  svg {
    position: absolute;
    right: calc(53px / 2);
    top: 50%;
    transform: translate(50%, -50%);

    pointer-events: none;

    path {
      fill: ${theme.primary.text};
      transition: 0.6s linear;
    }
  }

  &:focus-within {
    max-width: 500px;

    input {
      background-color: ${theme.primary.text};
      padding-right: 50px;
      cursor: text;
    }

    svg {
      cursor: pointer;
      path {
        fill: ${theme.primary.fill};
      }
    }
  }
`;
