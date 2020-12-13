import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinkComponent from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import GuestLayout from '../../layouts/Guest';
import { useSignIn, useStyles } from './hook';

const SignIn = () => {
  const { handleSubmit } = useSignIn();
  const classes = useStyles();

  return (
    <GuestLayout>
      <Typography variant="h4" component="h1">Sign In</Typography>
      <Typography variant="subtitle1" component="span" align="center">
        If you have not account go to
        {' '}
        <Link to="/sign-up">
          <LinkComponent>
            Sing Up
          </LinkComponent>
        </Link>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField id="email" name="email" label="Email" variant="outlined" />
          <TextField id="password" name="password" type="password" label="Password" variant="outlined" />
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </Typography>
    </GuestLayout>
  );
};

export default SignIn;
