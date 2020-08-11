import React from 'react';

import PropTypes from 'prop-types';

import Footer from '~/components/Footer/index';
import Header from '~/components/Header/index';
import SEO from '~/components/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

function Layout({ children, title }) {
  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
