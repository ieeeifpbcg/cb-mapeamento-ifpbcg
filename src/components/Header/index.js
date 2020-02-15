import React from 'react';

import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

function Header() {
  function searchAnimation() {
    const buttonElement = document.getElementById('search');
    const searchInputElement = document.getElementById('searchInput');

    buttonElement.style.display = 'none';
    searchInputElement.style.display = 'unset';
  }

  return (
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
  );
}

export default Header;
