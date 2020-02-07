import React from 'react';

import Layout from '~/templates/Layout';

import './styles.css';

import MainMap from '~/assets/maps/ifpb-cg-externo.png';

const MainSection = () => (
  <Layout title="Mapa Principal">
    <h1>Futura Navegação</h1>
    <p>Seção do mapa principal</p>
    <img src={MainMap} alt="Mapa principal do IFPB" />
  </Layout>
);

export default MainSection;
