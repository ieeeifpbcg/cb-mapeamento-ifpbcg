import React, { useEffect, useState } from 'react';

import Layout from '~/templates/Layout';

import { theme } from '../styles/theme';

import externo from '~/assets/data/externo.json';
import MainMap from '~/assets/maps/ifpb-cg-externo.svg';

const IndexPage = () => {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    for (let i = 1; i <= 42; i += 1) {
      const place = document.getElementById(`_${i}`);
      place.onmouseenter = event => {
        const [finalPlace] = externo.places.filter(
          placeCompare => placeCompare.id === place.id
        );
        setPlaceName(finalPlace.nomeExtenso);
        setLink(finalPlace.link);

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

      place.onmouseout = () => {
        const FloatingWindow = document.getElementById('float-window');
        FloatingWindow.style.display = 'none';
        FloatingWindow.style.height = '0px';
        FloatingWindow.style.width = '0px';
      };
    }
  }, []);

  return (
    <Layout title="Mapa Principal">
      <h2>Seção do mapa principal</h2>
      <div id="float-window">
        <h3>Nome: {placeName}</h3>
        <h4>Link: {link}</h4>
      </div>
      <MainMap />
    </Layout>
  );
};

export default IndexPage;
