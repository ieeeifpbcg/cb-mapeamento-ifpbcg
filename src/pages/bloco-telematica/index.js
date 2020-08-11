import React, { useState, useEffect } from 'react';

import Layout from '~/templates/Layout';

import TelematicBlocMap from '~/assets/maps/bloco-telematica.svg';

function TeachersBloc() {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setLink('');
  }, []);

  return (
    <Layout title="Bloco de telemática">
      <h2>Seção do Bloco de telemática</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <TelematicBlocMap />
    </Layout>
  );
}

export default TeachersBloc;
