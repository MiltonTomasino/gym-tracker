import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Settings({profileDesc, setProfileDesc, setIsLoggedIn}) {

  const [activeComponent, setActiveComponent] = useState('settings');
  const [updatedProfileDec, setUpdatedProfileDesc] = useState(profileDesc); // saving the text so that the desc is updated on update click

  const handleProfileDesc = (e) => {
    setProfileDesc(updatedProfileDec);
      setActiveComponent('settings');
  }

  // temporary just log out on delete
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
  // end of temp

  return (
    <div className='dashboard-settings'>
        {activeComponent === 'settings' && (
          <>
          <h1>Settings:</h1>
            <form>
              <input placeholder='Username' type='text'/><br /><br />
              <input placeholder='Email' type='email' /><br /><br />
              Description:<br />
              <textarea className='profile-description ' name='profile-description' value={updatedProfileDec} onChange={(e) => setUpdatedProfileDesc(e.target.value)}/><br /><br />
              <button type='button' onClick={handleProfileDesc}>Update</button>
            </form>
          </>
        )}

        {/* Clicking delete button will change to the delete account form */}
        {activeComponent === 'delete' ? (
          <div className='delete-account'>
            <form>
              <h3>Deleting you account? Please explain why:</h3>
                <ul>
                  <li>
                    <label> <input name='reason' type='radio' required/> Lack of use </label>
                  </li>
                  <li>
                    <label> <input name='reason' type='radio' /> Found an alternative </label>
                  </li>
                  <li>
                    <label> <input name='reason' type='radio' /> Personal reason </label>
                  </li>
                  <li>
                    <label> <input name='reason' type='radio' /> Other: <br /><textarea name='reason-other'/> </label>
                  </li>

                </ul>
            </form>
            <div onClick={() => setActiveComponent('settings')} className='back-arrow'>&#x2190;</div>

            <button className='profile-delete' type='button' onClick={handleLogout}>Delete Account</button>
            {/*<Link to='/'><button className='profile-delete'>Delete Account</button></Link>*/}
          </div>
        ) : (<button onClick={() => setActiveComponent('delete')} className='profile-delete'>Delete Account</button>)}

    </div>
  )
}

export default Settings