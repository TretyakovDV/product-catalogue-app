import { takeEvery } from 'redux-saga/effects';
import * as types from './types';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* signIn() {
  yield delay(1000);
}

function* sessionSaga() {
  yield takeEvery(types.SIGN_IN.REQUEST, signIn);
}

export default sessionSaga;
