import { takeEvery } from 'redux-saga/effects';
import * as types from './types';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getPost() {
  yield delay(1000);
}

function* postsSaga() {
  yield takeEvery(types.GET_POSTS.REQUEST, getPost);
}

export default postsSaga;
