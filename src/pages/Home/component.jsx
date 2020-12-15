import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/session/actions';

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(signOut());

  return (
    <div>
      <p>Home</p>
      <button
        type="button"
        onClick={handleClick}
      >
        sign out
      </button>
    </div>
  );
};

export default Home;
