import React, { useEffect, useState } from 'react';

import Layout from '~/templates/Layout';

import LabsMap from '~/assets/maps/bloco-laboratorios.svg';

function LabsBloc() {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setLink('');
  }, []);

  return (
    <Layout title="Bloco dos laboratórios">
      <h2>Seção do Bloco dos laboratórios</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <LabsMap />
    </Layout>
  );
}

export default LabsBloc;
