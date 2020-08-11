import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const HeaderSC = styled.header`
  position: fixed;
  width: 100%;
  height: 120px;
  background-color: ${theme.primary.fill};
  z-index: 2;
`;

export const HeaderContent = styled.div`
  max-width: 980px;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    margin-right: auto;
  }

  .fa-bars {
    font-size: 2em;
    color: ${theme.primary.text};
    margin-left: 40px;
  }
`;

export const SearchBox = styled.form`
  display: flex;
  flex-direction: row;

  height: 64px;

  input {
    width: ${({ width }) => width};
    padding: ${({ padding }) => padding};
    background-color: ${theme.primary.text};

    appearance: none;
    border: none;
    outline: none;
    border-radius: 15px 0 0 15px;
    color: ${theme.primary.active};
    font-size: 24px;
    line-height: 36px;
    transition: 0.4s linear;
  }

  button {
    background-color: ${({ buttonColor }) => buttonColor};
    border: 0;
    padding: 0 10px 0 10px;
    cursor: pointer;
    border-radius: 0 15px 15px 0;
    transition: 0.4s linear;

    svg path {
      fill: ${({ iconColor }) => iconColor};
    }
  }
`;
