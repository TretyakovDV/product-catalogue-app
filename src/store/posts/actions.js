import * as types from './types';

export const signIn = (formData) => ({
  type: types.SIGN_IN,
  formData,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const signUP = (formData) => ({
  type: types.SIGN_UP,
  formData,
});
