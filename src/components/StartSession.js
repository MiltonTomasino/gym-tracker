import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/StartSession.css";

function StartSession() {

    const navigate = useNavigate();
    const { from } = { from: { pathname: '/session' } };

    const handleStartSession = () => {
        // Redirect to the "/profile" page when the session ends
        navigate(from);
      };

  return (
    <div>
        <button className="start-session-button" onClick={handleStartSession}>StartSession</button>
    </div>
  )
}

export default StartSession