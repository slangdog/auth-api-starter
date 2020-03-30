import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(() => {
    const localData = localStorage.getItem('auth');
    return localData ? JSON.parse(localData) : {};
  });

  const login = (email, password) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };
    return fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(data => {
            throw new Error(data.error)
          })
        }
      })
      .then(response => {
        setAuth(response);
        localStorage.setItem('auth', JSON.stringify(response));
        return response;
      })
      .catch(err => {
        return err;
      })
  },
  
  logout = () => {
    setAuth({});
    localStorage.removeItem('auth');
  };
  
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      { props.children }
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;