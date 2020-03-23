import React, { useState } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchIcon from '~/assets/icons/search-icon.svg';

import { HeaderSC, SearchBox } from './styles';
import { theme } from '~/styles/theme';

function Header() {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(0);
  const [icon, setIcon] = useState(theme.primary.text);
  const [searchBox, setSearchBox] = useState(theme.primary.fill);

  function search() {
    if (!isOpen) {
      setIsOpen(400);
      setIcon(theme.primary.fill);
      setSearchBox(theme.primary.text);
      return;
    }

    alert(text);
  }

  return (
    <HeaderSC>
      <div className="title">
        <h1>
          Collab Branch
          <br />
          Mapeamento IFPB-CG
        </h1>
      </div>

      <SearchBox width={`${isOpen}px`} icon={icon} searchBox={searchBox}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.which === 13) search();
          }}
          placeholder="Pesquise..."
        />
        <button type="button" onClick={search}>
          <SearchIcon />
        </button>
      </SearchBox>

      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </HeaderSC>
  );
}

export default Header;
