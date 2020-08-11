import React, { useEffect, useState } from 'react';

import Layout from '~/templates/Layout';

import OldReceptionMap from '~/assets/maps/antiga-recepcao.svg';

function OldReception() {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setLink('');
  }, []);

  return (
    <Layout title="Recepção antiga">
      <h2>Seção da Recepção antiga</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <OldReceptionMap />
    </Layout>
  );
}

export default OldReception;
