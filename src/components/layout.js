import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/global/navbar/';
import Footer from '../components/global/footer';

// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import './layout.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
