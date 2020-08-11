import React, { useState, useEffect } from 'react';

import Layout from '~/templates/Layout';

import AdmBlock1Map from '~/assets/maps/bloco-administrativo-1.svg';

function AdmBlock1() {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setLink('');
  }, []);

  return (
    <Layout title="Bloco administrativo">
      <h2>Seção do bloco administrativo 1</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <AdmBlock1Map />
    </Layout>
  );
}

export default AdmBlock1;
