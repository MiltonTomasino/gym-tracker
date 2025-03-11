import '../styles/Profile.css'
import Dashboard from '../components/Dashboard/Dashboard'
import React, { useEffect, useState } from 'react';

function ProfilePage({ setIsLoggedIn }) {

  const [profileDesc, setProfileDesc] = useState('No description yet'); // passing this down to child components to then retrieve
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    fetch('api/users/userinfo', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === true && data.username) {
          setUsername(data.username);
        }
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
  }, []);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePicture(null);
    }
  };

  return (
    <body>
        <div className='profile'>
            <div className='profile-info'>
          
              {username && <h1 className='username'>Welcome,  {username}</h1>}
              <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
              {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
              <p>{profileDesc}</p>
            </div>

            <div className='dashboard'>
                <Dashboard profileDesc={profileDesc} setProfileDesc={setProfileDesc} setIsLoggedIn={setIsLoggedIn}/>
            </div>

        </div>
    </body>
  )
}

export default ProfilePage