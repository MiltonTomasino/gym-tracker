import React from 'react'
import RegisterComp from './Register'
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function RegistrationBox() {
  return (
    <body>
        <br />
        <br />
        <div className="Register-container">
            <div className='box-1'>
                <h1>Almost there!</h1>
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
            <div className='box-2'><div><RegisterComp /></div></div>
        </div>
        <br />
        <br />
    </body>
  )
}

export default RegistrationBox