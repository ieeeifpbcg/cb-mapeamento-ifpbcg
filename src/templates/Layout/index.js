import React from 'react';

import PropTypes from 'prop-types';
import Header from '~/components/Header/index';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

import Footer from '~/components/Footer/index';

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
