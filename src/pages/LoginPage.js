import React from "react";
import { Link } from "react-router-dom"
import LoginComp from "../components/Login";
import Team from "../assets/image.jpeg"

function Login({ setIsLoggedIn }) {
    return (
        <div>
            <header>
                <h3>Welcome to GymTracker.</h3>
                <h3> Enter your username and password to get started. </h3>
            </header>
            <LoginComp setIsLoggedIn={setIsLoggedIn} />
            <p style={{ textAlign: 'center' }}>
                Do not have an account? <Link to="/register">Register</Link>
            </p>
            <div className="grid-bottom-quote">
                <div className="description2">
                    <div className="quote"> Lets begin today to see the result tomorrow!!!!!</div>
                </div>
            </div>
        </div>
    )
}

export default Login