import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
