import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);
  return (
    <Route {...rest} render={props => {
      if (!auth.token) {
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      }
      return <Component {...props} />
    }} />
  );
}