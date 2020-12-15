import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

const Main = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
