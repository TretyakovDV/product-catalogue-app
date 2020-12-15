import { takeEvery, put } from 'redux-saga/effects';

import * as types from './types';
import { setSignInData, setSignInError } from './actions';
import firebase from '../../agent/firebase';

function* signIn(action) {
  try {
    const { email, password } = action.formData;
    const data = yield firebase.auth().signInWithEmailAndPassword(email, password);
    const { user: { refreshToken, uid } } = data;
    yield put(setSignInData({ refreshToken, uid }));
    yield window.localStorage.setItem('refreshToken', refreshToken);
    yield window.localStorage.setItem('uid', uid);
  } catch (error) {
    yield put(setSignInError());
    console.error('error => ', error.message);
  }
}

function* signOut() {
  try {
    yield firebase.auth().signOut();
    yield window.localStorage.clear();
  } catch (error) {
    console.error('error => ', error.message);
  }
}

function* signUp(action) {
  try {
    const { email, password } = action.formData;
    yield firebase.auth().createUserWithEmailAndPassword(email, password);
    yield action.history.push('/sign-in');
  } catch (error) {
    console.error('error => ', error.message);
  }
}

function* sessionSaga() {
  yield takeEvery(types.SIGN_IN.REQUEST, signIn);
  yield takeEvery(types.SIGN_OUT, signOut);
  yield takeEvery(types.SIGN_UP.REQUEST, signUp);
}

export default sessionSaga;
