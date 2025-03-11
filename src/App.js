import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoutes from './ProtectedRoutes';
import "./App.css";
import ConditionalDisplay from './components/ConditionalDisplay';
import SessionPage from './pages/SessionPage';
import VerifyPage from './pages/VerifyPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check the authentication status on initial load
  //   const checkAuthentication = async () => {
  //     const result = await fetch('/api/check-session', {
  //       credentials: 'include',
  //     });
  //     const apiRes = await result.json();
  //     setIsLoggedIn(apiRes.isLoggedIn);
  //   };

  //   checkAuthentication();
  // }, []);

  return (
    <div className="App">
      <ConditionalDisplay>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </ConditionalDisplay>

      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route element={<ProtectedRoutes setIsLoggedIn={setIsLoggedIn}/>} >
            <Route path='/profile' element={<ProfilePage setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/session" element={<SessionPage />} />
          </Route>
        </Routes>
      </div>
      <ConditionalDisplay>
        <Footer />
      </ConditionalDisplay>
    </div>
  );
}

export default App;
