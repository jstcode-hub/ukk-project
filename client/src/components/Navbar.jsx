import React, { useState, useEffect } from 'react';
import { Link, redirect, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../constants/actionTypes.js';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    redirect.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className="flex text-center justify-between">
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <div>
        {user?.result ? (
          <div>
            <h3>{user?.result.name}</h3>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/auth">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
