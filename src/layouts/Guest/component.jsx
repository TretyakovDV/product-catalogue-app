import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './hook';

const Guest = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

Guest.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Guest;
