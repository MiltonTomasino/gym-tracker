import React, {useEffect, useState} from 'react';
import "../styles/Register.css"
import Terms from './Terms';
// import Terms from "../assets/termsInfo.png";

function RegisterComp() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [password2, setPassword2] = useState('');
    const [password2Error, setPassword2Error] = useState('');

    const [registeredMessage, setRegisteredMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // varriables to check if the password is to be shown or not
    const [showPassword, setShowPassword] = useState(false); 

    const handleSubmit = (event) => {
        const validateUsername = (username) => {
            // Username Regex Pattern 
            const usernamePattern = /^[a-zA-Z0-9]{5,}$/;
            return usernamePattern.test(username);
        };

        const validateEmail = (email) => {
            // Email Regex Pattern 
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        };

        const validatePassword = (password) => {
            // Use https://regexr.com/ for testing regex patterns
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            return passwordPattern.test(password);
        };

        const validatePassword2 = (password2) => {
            // Use https://regexr.com/ for testing regex patterns
            if(password2 === password) return true;
        };

        event.preventDefault();

        // Username
        if (!validateUsername(username)) {
            setUsernameError('Username may only contain letters and numbers. Must be at least 5 characters long.');
        } else {
            // Clear the error message 
            setUsernameError('✅');
        }

        // Email
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            // Clear the error message 
            setEmailError('✅');
        }

        // Password
        if (!validatePassword(password)) {
            setPasswordError('Please enter a valid password.Passwords must contain at least one digit, one lowercase letter, one uppercase letter, and minimum length of 8.');
        } else {
            // Clear the error message and proceed with form submission
            setPasswordError('✅');
        }

        // Password
        if (!validatePassword2(password2)) {
            setPassword2Error('Passwords must match.');
        } else {
            // Clear the error message and proceed with form submission
            setPassword2Error('✅');
        }

        if (validateUsername(username) && validateEmail(email) && validatePassword(password) && validatePassword2(password2)) {
            //console.log("here");
            insertUser();
        }
};

// function to toggle password visibility
function togglePassword() {
    setShowPassword(!showPassword);
}

async function insertUser() {
    const result = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        }),
    });
    const apiRes = await result.json();
    //console.log(apiRes);
    if (apiRes.status) {
        setErrorMessage();
        setRegisteredMessage(apiRes.message);
    } else {
        setRegisteredMessage();
        setErrorMessage(apiRes.message);
    }
}

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='form-element'>
                    <label>Enter Username:</label>
                    <input type='text'
                    id='username'
                    name='username'
                    value={username}
                    onChange={(e) =>setUsername(e.target.value)}
                    required
                    />
                    <span style={{ color: 'red' }}><small>{usernameError}</small></span><br /> {/* changed the size of error texts to small for space saving. Also removed the <br> between input and error */}
                </div>

                <div className='form-element'>
                    <label>Enter Email:</label>
                    <input type='text'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    required
                    />
                    <span style={{ color: 'red' }}><small>{emailError}</small></span><br />
                </div>

                <div className='form-element'>
                    <label>Enter Password:</label>
                    <div className='password-box'>
                        <input type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <span className='showPassword' onClick={togglePassword}>&#9737;</span> {/* element used to toggle password visibility */}
                    </div>
                    <span style={{ color: 'red' }}><small>{passwordError}</small></span><br />   
                    
                </div>
                

                <div className='form-element'>
                    <label>Re-enter Password:</label>
                    <input type='password'
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                    />
                    <span style={{ color: 'red' }}><small>{password2Error}</small></span><br />      
                </div>

                <Terms />
                <button className='form-element'>Register</button>
            </form>
            <br></br>
            <div id="registered-message">{registeredMessage}</div>
            <div id="error-message">{errorMessage}</div>
        </div>
    );
};

export default RegisterComp;

