import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinkComponent from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import GuestLayout from '../../layouts/Guest';
import { useSignUp, useStyles } from './hook';

const SignUp = () => {
  const { handleSubmit } = useSignUp();
  const classes = useStyles();

  return (
    <GuestLayout>
      <Typography variant="h4" component="h1">Sign Up</Typography>
      <Typography variant="subtitle1" component="span" align="center">
        If you have account go to
        {' '}
        <Link to="/sign-in">
          <LinkComponent>
            Sing In
          </LinkComponent>
        </Link>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField id="email" name="email" label="Email" variant="outlined" />
          <TextField id="password" name="password" type="password" label="Password" variant="outlined" />
          <TextField id="passwordConfirmation" name="passwordConfirmation" type="password" label="Password Confirmation" variant="outlined" />
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Typography>
    </GuestLayout>
  );
};

export default SignUp;
