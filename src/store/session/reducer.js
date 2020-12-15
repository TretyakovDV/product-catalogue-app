import * as types from './types';

const initialState = {
  auth: false,
  refreshToken: null,
  uid: null,
  isLoading: false,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_IN.SUCCESS:
      return {
        ...state,
        isLoading: false,
        refreshToken: action.refreshToken,
        uid: action.uid,
        auth: true,
      };
    case types.SIGN_IN.FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case types.SIGN_OUT:
      return initialState;
    default: return state;
  }
};

export default session;
