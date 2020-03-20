import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterSC } from './styles';

function Footer() {
  return (
    <FooterSC>
      <h3>
        Collab Branch © 2020, Projeto feito com {'<3'} baseado pelo{' '}
        <a
          href="https://opendevufcg.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenDevUFCG
        </a>
      </h3>
      <a
        href="https://github.com/ieeeifpbcg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> IEEE IFPB-CG
      </a>
    </FooterSC>
  );
}

export default Footer;
