import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/VerifyPage.css";

function VerifyPage() {
    const [verified, setVerified] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Get the query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const emailToken = params.get('token');

    // Call the handleVerify function to initiate the verification process
    handleVerify(emailToken);
  }, []);

  async function handleVerify(emailToken) {
    try {
      const result = await fetch('api/users/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailToken: emailToken,
        }),
      });

      const apiRes = await result.json();
      if(apiRes.status) {
        setVerifyMessage(apiRes.message);
        setVerified(true);
      } else {
        setErrorMessage('An error occurred during verification.');
        setVerified(false);
      }
    } catch (error) {
        setVerified(false);
      console.error('Error during verification:', error);
      setErrorMessage('An error occurred during verification.');
    }
  }

  const navigate = useNavigate();
  const { from } = { from: { pathname: '/login' } };

  const handleLoginButton = () => {
    // Redirect to the "/profile" page when the session ends
    navigate(from);
  };

  return (
    <div>
        {verified ? (
            <div className="container-verify">
                <p class="verify-message">{verifyMessage}</p>
                <br></br>
                <p className='verify-undermessage'>Please Log In Again:</p>
                <br></br>
                <button className='login-button' onClick={handleLoginButton}>
                    LogIn
                </button>
            </div>
        ) : (
          <div className="container-verify">
            <p class="error-message-verify">{errorMessage}</p>
          </div>
        )}
    </div>
  );
}

export default VerifyPage;
