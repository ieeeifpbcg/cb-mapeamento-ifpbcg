import React, { useState } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchIcon from '~/assets/icons/search-icon.svg';

import { HeaderSC, SearchBox } from './styles';
import { theme } from '~/styles/theme';

function Header() {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(0);
  const [padding, setPadding] = useState(0);
  const [iconColor, setIconColor] = useState(theme.primary.text);
  const [buttonColor, setButtonColor] = useState(theme.primary.fill);

  function handleSubmit(event) {
    event.preventDefault();

    if (!isOpen) {
      setIsOpen(400);
      setPadding(15);
      setIconColor(theme.primary.fill);
      setButtonColor(theme.primary.text);
      return;
    }

    if (isOpen && !text) {
      setIsOpen(0);
      setPadding(0);
      setIconColor(theme.primary.text);
      setButtonColor(theme.primary.fill);
      return;
    }
    alert(text);
  }

  return (
    <HeaderSC>
      <h1>
        Collab Branch
        <br />
        Mapeamento IFPB-CG
      </h1>

      <SearchBox
        onSubmit={handleSubmit}
        width={`${isOpen}px`}
        padding={`${padding}px`}
        iconColor={iconColor}
        buttonColor={buttonColor}
      >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Pesquise..."
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </SearchBox>

      <FontAwesomeIcon icon={faBars} />
    </HeaderSC>
  );
}

export default Header;
