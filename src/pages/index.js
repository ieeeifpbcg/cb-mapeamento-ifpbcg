import React, { useEffect, useState } from 'react';

import Layout from '~/templates/Layout';

import { theme } from '../styles/theme';

import externo from '~/assets/data/externo.json';
import MainMap from '~/assets/maps/ifpb-cg-externo.svg';

const IndexPage = () => {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    externo.forEach(placeInJSON => {
      const placeInDOM = document.getElementById(placeInJSON.id);

      placeInDOM.onmouseenter = event => {
        setPlaceName(placeInJSON.nomeExtenso);
        setLink(placeInJSON.link);

        const x = event.pageX;
        const y = event.pageY - 300;
        const FloatingWindow = document.getElementById('float-window');
        FloatingWindow.style.display = 'flex';
        FloatingWindow.style.width = '300px';
        FloatingWindow.style.height = '100px';
        FloatingWindow.style.top = `${y}px`;
        FloatingWindow.style.left = `${x}px`;
        FloatingWindow.style.backgroundColor = theme.primary.fill;
      };

      placeInDOM.onmouseout = () => {
        const FloatingWindow = document.getElementById('float-window');
        FloatingWindow.style.display = 'none';
        FloatingWindow.style.height = '0px';
        FloatingWindow.style.width = '0px';
      };
    });
  }, []);

  return (
    <Layout title="Mapa Principal">
      <h2>Seção do mapa principal</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <MainMap />
    </Layout>
  );
};

export default IndexPage;
