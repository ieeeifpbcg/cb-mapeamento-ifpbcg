import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

function Layout({ children, title }) {
  function searchAnimation() {
    const buttonElement = document.getElementById('search');
    const searchInputElement = document.getElementById('searchInput');

    buttonElement.style.display = 'none';
    searchInputElement.style.display = 'unset';
  }

  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      <header>
        <div>
          <h1>
            Collab Branch
            <br />
            Mapeamento IFPB-CG
          </h1>
        </div>
        <button type="button" id="search" onClick={searchAnimation}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          name="pesquisa"
          id="searchInput"
          placeholder="Pesquisar"
        />
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <h3>
          Collab Branch © 2020, Projeto feito com {'<3'} baseado pelo
          OpenDevUFCG
        </h3>
        <a
          href="https://github.com/ieeeifpbcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> IEEE IFPB-CG
        </a>
      </footer>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
