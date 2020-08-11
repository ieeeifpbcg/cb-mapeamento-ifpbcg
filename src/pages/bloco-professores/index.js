import React, { useState, useEffect } from 'react';

import Layout from '~/templates/Layout';

import TeachersBlocMap from '~/assets/maps/bloco-professores.svg';

function TeachersBloc() {
  const [placeName, setPlaceName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setLink('');
  }, []);

  return (
    <Layout title="Bloco dos professores">
      <h2>Seção do Bloco dos professores</h2>
      <div id="float-window">
        <h3>Nome: {placeName || 'Não Catalogado'}</h3>
        <h4>Link: {link || 'Não tem horário'}</h4>
      </div>
      <TeachersBlocMap />
    </Layout>
  );
}

export default TeachersBloc;
