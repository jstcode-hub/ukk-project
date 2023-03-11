import React from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/auth" component={() => (!user ? Auth : Dashboard)} /> */}
          <Route path="/auth" element={!user ? <Auth /> : <Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
