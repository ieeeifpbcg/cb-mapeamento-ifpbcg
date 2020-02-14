import React from 'react';

import Layout from '~/templates/Layout';

import MainMap from '~/assets/maps/ifpb-cg-externo.png';

const IndexPage = () => (
  <Layout title="Mapa Principal">
    <h2>Seção do mapa principal</h2>
    <img id="mapa" className="map" src={MainMap} alt="Mapa principal do IFPB" />
  </Layout>
);

export default IndexPage;
