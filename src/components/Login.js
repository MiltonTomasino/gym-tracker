import React, { useEffect, useState } from 'react';
import "../styles/Login.css"
import { useNavigate, useLocation } from 'react-router-dom';

function LoginComp({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/profile' } }; // Get the previous location or set it to the home page

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loginMessage, setLoginMessage] = useState('');
  const [loginData, setLoginData] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    const result = await fetch('api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    });
    const apiRes = await result.json();
    //console.log(apiRes);
    if (apiRes.status) {
      setIsLoggedIn(true); // Update isLoggedIn state in App.js
      navigate(from);
      setLoginData(`Your Email is: ${apiRes.email}`);
      setLoginMessage(apiRes.message);
    } else {
      setLoginData();
      setLoginMessage(apiRes.message);

    }
  }

  return (
    <body>
      <div className='form2'>
        <form className='form1' onSubmit={handleLogin}>
          <h1>Log in</h1>
          <div className='form-element1'>
            <label>Enter Username:</label>
            <input type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className='form-element1'>
            <label>Enter Password:</label>
            <input type='password'
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className='form-element' type='submit'>LogIn</button>
        </form>
        <br></br>
        <div id="login-message">{loginMessage}</div>
        <div id="login-data">{loginData}</div>
      </div>
    </body>
  );
};

export default LoginComp;