import React, { useState, useEffect, useRef } from "react";
import "../styles/Session.css";
import { useNavigate } from 'react-router-dom';

function SessionPage() {

    const workoutPlan = [
    { name: "Treadmill", savedWeight: 100, pinLocation: "Middle", seatHeight: "Medium" },
    { name: "Stationary Bike", savedWeight: 50, pinLocation: "3", seatHeight: "Low" },
    { name: "Rowing Machine", savedWeight: 80, pinLocation: "5", seatHeight: "High" },
    { name: "Elliptical", savedWeight: 70, pinLocation: "2", seatHeight: "Medium" },
    ]; // Replace this with your workout plan array

    const [currentMachineIndex, setCurrentMachineIndex] = useState(0);
    const [currentMachine, setCurrentMachine] = useState(workoutPlan[currentMachineIndex]);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [changedWeight, setChangedWeight] = useState(workoutPlan[currentMachineIndex].savedWeight);
    const [showNav, setShowNav] = useState(true);

    const intervalRef = useRef(null);

    useEffect(() => {
        setCurrentMachine(workoutPlan[currentMachineIndex]);
        setChangedWeight(workoutPlan[currentMachineIndex].savedWeight);
    }, [currentMachineIndex, workoutPlan]);

    const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    };

    const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    };

    const handleNextMachine = () => {
    if (currentMachineIndex === workoutPlan.length - 1) {
        // End of the workout plan, show "End Session" button or handle completion here
        //console.log("Workout Completed!");
        return;
    }

    setCurrentMachineIndex((prevIndex) => prevIndex + 1);
    setTimer(0);
    };

    const handleChangeWeight = (event) => {
    const newWeight = parseInt(event.target.value);
    setChangedWeight(newWeight);
    };

    const handleSaveWeight = () => {
    // Implement logic to save the changed weight for the current machine
    //console.log(`Saved weight ${changedWeight} for ${currentMachine.name}`);
    };

    const navigate = useNavigate();
    const { from } = { from: { pathname: '/profile' } };

    const handleEndSession = () => {
      // Redirect to the "/profile" page when the session ends
      navigate(from);
    };
    

    return (
<div className="container">
      <div className={`nav-bar ${showNav ? "show" : "hide"}`}>
        <div className="nav-bar-content">
        <button className="toggle-btn" onClick={() => setShowNav(!showNav)}>
            {showNav ? "←" : "→"} {/* Change arrow direction based on showNav */}
        </button>
        {showNav && ( // Only show the content when the navbar is not collapsed
            <div className="info-panel">
                <h2>Machine Info</h2>
                <p>Current Weight: {currentMachine.savedWeight} lbs</p>
                <label>
                    Change Weight:
                    <input
                    type="number"
                    value={changedWeight}
                    onChange={handleChangeWeight}
                    />
                </label>
                
                <button onClick={handleSaveWeight}>Save Weight</button>
                <p>Pin Location: {currentMachine.pinLocation}</p>
                <p>Seat Height: {currentMachine.seatHeight}</p>
            </div>
          )}
        </div>
      </div>
      <div className="main-section">
        <div className="machine-section">
            <div className="machine-info">
            <h2>Current Workout Machine: {currentMachine.name}</h2>
            </div>
            <div className="timer">
            <h2>Timer: {timer} seconds</h2>
            </div>
            <button className="start-btn" onClick={isRunning ? stopTimer : startTimer}>
            {isRunning ? "Stop" : "Start"}
            </button>
            {currentMachineIndex !== workoutPlan.length - 1 && (
            <button className="next-btn" onClick={handleNextMachine}>
                Next
            </button>
            )}
        </div>
        </div>
        <button className={`exit-btn ${showNav ? "show" : "hide"}`} onClick={handleEndSession}>
        {currentMachineIndex === workoutPlan.length - 1 ? "End Session" : "Exit"}
      </button>
    </div>
    );
}

export default SessionPage