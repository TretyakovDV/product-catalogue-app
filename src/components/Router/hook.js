import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSignInData } from '../../store/session/actions';

// eslint-disable-next-line import/prefer-default-export
export const useRouter = () => {
  const { auth } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = window.localStorage.getItem('refreshToken');
    const uid = window.localStorage.getItem('uid');

    if (refreshToken && uid) {
      dispatch(setSignInData({ refreshToken, uid }));
    }
  }, []);

  return {
    auth,
  };
};
