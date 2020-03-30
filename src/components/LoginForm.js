import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginForm = (props) => {
  const { auth, login } = useContext(AuthContext),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [error, setError] = useState(''),

  submitForm = (e) => {
    e.preventDefault();
    login(email, password)
      .then(
        user => {
          props.history.push('/home');
        },
        error => {
          setError(error.message);
        }
      );
  }

  if (auth.token) {
    props.history.push('/home');
  }

  return (
    <form onSubmit={ submitForm }>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" value={ email } onChange={ (e) => setEmail(e.target.value) } required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={ password } onChange={ (e) => setPassword(e.target.value) } required />
      { error && <p>{ error }</p> }
      <button>Login</button>
    </form>
  );
}
 
export default LoginForm;