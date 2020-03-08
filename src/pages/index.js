import React from 'react';

import Layout from '~/templates/Layout';

import MainMap from '~/assets/maps/ifpb-cg-externo.svg';

const IndexPage = () => {
  return (
    <Layout title="Mapa Principal">
      <h2>Seção do mapa principal</h2>
      <MainMap />
    </Layout>
  );
};

export default IndexPage;
