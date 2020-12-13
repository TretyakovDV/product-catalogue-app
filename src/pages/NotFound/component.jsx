import React from 'react';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';

import GuestLayout from '../../layouts/Guest';
import { useStyles } from './hook';

const NotFound = () => {
  const classes = useStyles();

  return (
    <GuestLayout>
      <Typography className={classes.root} variant="h1" component="h1" align="center">404</Typography>
      <Typography variant="h2" component="h2" align="center">Page not found</Typography>
    </GuestLayout>
  );
};

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
