import React, { useState } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchIcon from '~/assets/icons/search-icon.svg';

import { HeaderSC, SearchBox } from './styles';

function Header() {
  const [text, setText] = useState('');

  return (
    <HeaderSC>
      <div>
        <h1>
          Collab Branch
          <br />
          Mapeamento IFPB-CG
        </h1>
      </div>
      <SearchBox>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Pesquise..."
        />
        <SearchIcon />
      </SearchBox>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </HeaderSC>
  );
}

export default Header;
