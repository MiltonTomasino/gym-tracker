import React from "react";
import { Link } from "react-router-dom"
import Aboutus from "../assets/about.jpeg"
import Team from "../assets/team.jpeg"
import "../styles/About.css"

function About() {
    return (
        <body>
            <div className = "grid">
                <div className = "description1">
                    <div className="AboutPage-description">We are a team of passionate fitness enthusiasts and technologists committed to simplifying the workout process. We recognize the challenges that gym-goers face when trying to remember their unique equipment settings and workout routines, and we've created a solution - Gym Tracker. Our web application not only streamlines the process of tracking and managing gym equipment settings but also introduces a unique intensity formula to personalize the workout experience. Our mission is to enhance the overall quality of your workout, improve fitness levels, and contribute to a healthier society.</div>
                </div>
                <div className = "image1"><img className="picture" src = {Aboutus}></img></div>
                <div className = "image2"><img className="picture2" src = {Team}></img></div>
            <div className = "description2">
            <div className="AboutPage-description">Built with a user-friendly interface, Gym Tracker allows users of all ages to create personal accounts where they can input, save, and update their equipment settings. Our platform's unique focus is on personalizing gym equipment settings, which is a feature largely overlooked by most fitness apps. The key feature of Gym Tracker is our proprietary intensity formula: repetitions * weights / time. This formula, in combination with the ability to remember users' progress and suggest workout modifications, offers a unique flexibility that caters to each user's individual needs. Our platform is designed to adapt to users ranging from beginners to athletes and powerlifters. We believe that Gym Tracker is not just a fitness app, but a game-changer that revolutionizes how individuals interact with their workout plans.</div>
            </div>
        </div>
        </body>
    )
}

export default About