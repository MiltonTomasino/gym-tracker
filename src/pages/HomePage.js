import React from "react";
import { Link } from "react-router-dom"
import Gym from "../assets/gym.jpeg"
import { MachineSearch } from "../components/MachineSearch";
import Treadmill from "../assets/treadmill.jpg"
// import homepage.css
import "../styles/Homepage.css"

function Home() {
    return (
        <div>
            <h3>Search our Popular Machine Templates!</h3>
            <div className="search-bar-container">
                <MachineSearch />
            </div>
            <div className = "grid">
                <div className = "description1">
                    <div className="HomePage-description-title">Revolutionize Your Fitness Experience</div>
                    <div className="HomePage-description-subtitle">Ultimate web application for personalized gym workouts</div>
                </div>
                <div className = "image1"><img className="picture" src = {Gym}></img></div>
                <div className = "image2"><img className="picture2" src = {Treadmill}></img></div>
            <div className = "description2">
            <ul className="HomePage-description-list">
                    <li>Save your equipment settings</li>
                    <li>Track your progress</li>
                    <li>Receive weight suggestions</li>
                    <li>Tailor your workout to your individual needs</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Home;