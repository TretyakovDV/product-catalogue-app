import * as types from './types';

export const signIn = (formData) => ({
  type: types.SIGN_IN.REQUEST,
  formData,
});

export const setSignInData = ({ refreshToken, uid }) => ({
  type: types.SIGN_IN.SUCCESS,
  refreshToken,
  uid,
});

export const setSignInError = () => ({
  type: types.SIGN_IN.FAILURE,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const signUp = (formData, history) => ({
  type: types.SIGN_UP.REQUEST,
  formData,
  history,
});
