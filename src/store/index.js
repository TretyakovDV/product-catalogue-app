import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import session from './session';
import posts from './posts';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    session: session.sessionReducer,
    posts: posts.postsReducer,
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
  ),
);

sagaMiddleware.run(session.sessionSaga);
sagaMiddleware.run(posts.postsSaga);

export default store;
