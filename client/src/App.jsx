import React from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import FormComplaint from './components/FormComplaint';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="mt-44">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/formcomplaint" element={<FormComplaint />} />
            <Route path="/auth" element={!user ? <Auth /> : <Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
