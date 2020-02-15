import React from 'react';

import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

function Header() {
  function searchAnimation() {
    const searchBoxElement = document.getElementById('searchBox');
    const searchInputElement = document.getElementById('searchInput');
    const searchElement = document.getElementsByClassName('fa-search')[0];

    searchBoxElement.style.backgroundColor = '#fff';
    searchInputElement.style.display = 'unset';
    searchElement.style.color = '#3fb59b';
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
      <div id="searchBox">
        <input
          type="text"
          name="pesquisa"
          id="searchInput"
          placeholder="Pesquisar"
        />
        <button type="button" id="search" onClick={searchAnimation}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
