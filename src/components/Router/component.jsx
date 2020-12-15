import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Home from '../../pages/Home';
import Add from '../../pages/Add';
import Edit from '../../pages/Edit';
import NotFound from '../../pages/NotFound';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

import { useRouter } from './hook';

const Router = () => {
  const { auth } = useRouter();

  return (
    <BrowserRouter>
      {auth ? (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Redirect from="/sign-in" to="/" />
          <Redirect from="/sign-up" to="/" />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
