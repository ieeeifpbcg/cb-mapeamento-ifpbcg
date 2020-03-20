import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const FooterSC = styled.footer`

  color: ${theme.primary.text}
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;
  margin-top: auto;
  text-align: center;
  position: fixed;
  padding: 10px;
  bottom: 0;
  width: 100%;
  heigh: 100px;
  background-color: ${theme.primary.fill};
  align-self: auto;
  z-index: 10;


  h3 > a {
    color: ${theme.primary.active};
  }

  h3 > a:hover {
    color: ${theme.primary.hover};
  }

  a:hover {
    font-weight: bolder;
  }
`;
