import React from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from '~/assets/icons/search-icon.svg';

import { HeaderSC } from './styles';

function Header() {
  function searchAnimation() {
    const searchBoxElement = document.getElementById('searchBox');
    const searchInputElement = document.getElementById('searchInput');
    // const searchElement = document.getElementsByClassName('fa-search')[0];

    searchBoxElement.style.backgroundColor = '#fff';
    searchInputElement.style.display = 'unset';
    // searchElement.style.color = '#3fb59b';
  }

  return (
    <HeaderSC>
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
          <Search />
        </button>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </HeaderSC>
  );
}

export default Header;
