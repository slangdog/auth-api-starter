import React, { useState, useContext } from 'react';
import { ApiService } from '../helpers/ApiService';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { auth, logout } = useContext(AuthContext);
  const [stores, setStores] = useState(() => {
    return ApiService.get('/stores', {auth, logout}).then(stores => setStores(stores.data));  
  });

  return (
    <>
      <h1>We are home.</h1>
      { stores.length > 0 && stores.map(store => (
        <p key={ store.uid }>{ store.title }</p>
      ))}
      <button onClick={ logout }>Logout</button>
    </>
  );
}
 
export default Home;