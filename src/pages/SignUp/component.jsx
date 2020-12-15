import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinkComponent from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import GuestLayout from '../../layouts/Guest';
import { useSignUp, useStyles } from './hook';

const SignUp = () => {
  const {
    handleSubmit,
    values,
    handleChange,
    isLoading,
    errors,
  } = useSignUp();
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
          <TextField
            disabled={isLoading}
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            value={values.email}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            disabled={isLoading}
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            disabled={isLoading}
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            label="Password Confirmation"
            variant="outlined"
            onChange={handleChange}
            value={values.passwordConfirmation}
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation}
          />
          <Button
            disabled={isLoading}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </Typography>
    </GuestLayout>
  );
};

export default SignUp;
