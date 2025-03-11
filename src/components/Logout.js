import React, { useEffect, useState } from 'react';
import "../styles/Login.css"
import { useNavigate, useLocation } from 'react-router-dom';

function LogoutComp({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } }; // Get the previous location or set it to the home page


  async function handleLogout() {
    const result = await fetch('api/users/logout', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
    });
    const apiRes = await result.json();
    if (apiRes.status) {
    setIsLoggedIn(false); // Update isLoggedIn state in App.js
    navigate(from);
    }
  }

  return (
    <>
        <button className='log-out-button' type='button' onClick={handleLogout}>LogOut</button>
      <br></br>
    </>
  );
};

export default LogoutComp;