import React, { useState, useEffect } from 'react';

import Layout from '~/templates/Layout';

import ClassCenterMap from '~/assets/maps/central-de-aulas.svg';

function TeachersBloc() {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setLink('');
  }, []);

  return (
    <Layout title="Central de aulas">
      <h2>Seção da Central de aulas</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <ClassCenterMap />
    </Layout>
  );
}

export default TeachersBloc;
