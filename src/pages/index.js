import React, { useEffect, useState } from 'react';

import Layout from '~/templates/Layout';

import externo from '~/assets/data/externo.json';
import MainMap from '~/assets/maps/ifpb-cg-externo.svg';

const IndexPage = () => {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    for (let i = 1; i <= 42; i += 1) {
      const place = document.getElementById(`_${i}`);
      place.onmouseover = event => {
        const [finalPlace] = externo.places.filter(
          placeCompare => placeCompare.id === place.id
        );
        setPlaceName(finalPlace.nomeExtenso);
        setLink(finalPlace.link);

        const x = event.pageX;
        const y = event.pageY + 250;
        const FloatingWindow = document.getElementById('float');
        FloatingWindow.style.float = 'left';
        FloatingWindow.style.top = y;
        FloatingWindow.style.left = x;
        FloatingWindow.style.width = '300px';
        FloatingWindow.style.height = '150px';
        FloatingWindow.style.backgroundColor = 'tranparent';
      };
    }
  }, []);

  return (
    <Layout title="Mapa Principal">
      <h2>Seção do mapa principal</h2>
      <div id="float">
        <h3>Nome: {placeName}</h3>
        <h4>Link: {link}</h4>
      </div>
      <MainMap />
    </Layout>
  );
};

export default IndexPage;
