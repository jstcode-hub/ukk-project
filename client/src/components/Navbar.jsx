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
    const token = user.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <nav className='fixed top-0 bg-white shadow-lg w-full'>
      <div className='lg:container lg:mx-auto flex justify-between items-center'>
        <Link className='nav-brand text-2xl font-extrabold' style={{ fontFamily: 'Josefin Sans' }} to="/">
          Logo
        </Link>

        <div className='navbar-nav flex justify-around'>
          {user.result ? (
            <div>
              {/* <h3>{user?.result.name}</h3> */}
              <button className='nav-item font-medium mx-4 px-8 py-4 hover:bg-sky-500 hover:text-white hover:font-bold' onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link className='nav-item font-medium mx-4 px-8 py-4 hover:bg-sky-500 hover:text-white hover:font-bold' to="/auth">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
