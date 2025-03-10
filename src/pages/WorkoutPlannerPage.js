import React, { useEffect, useState } from 'react';
import { MachineSearch } from "../components/MachineSearch";
import "../styles/TestPage.css"

function WorkoutPlanner() {
    // initialize state variable to hold all machines part of user's workout plan
    const [planMachines, setPlanMachines] = useState([]);
    // initialize state variable to hold search results to allow functionality of passing machineId
    const [searchResults, setSearchResults] = useState([]);

    // runs the first time the page is loaded to display the current list of machines from the user's workoutplan
    useEffect(() => {
        async function runGetPlanMachines() {
            const data = await getPlanMachines();
            if(data) {
                setPlanMachines(data);
            }
        };
        runGetPlanMachines();
    }, [])

    // Calls back-end query to database and fetches all machines in the workoutplan
    async function getPlanMachines() {
        const result = await fetch('api/plan/getPlanMachines');
        const apiRes = await result.json();
        if (apiRes.status) {
            return apiRes.data;
        } else {
            console.error('Error fetching data.')
            return null;
        }
    }

    // Allows deletion of individual machines from the workoutplan
    function handleDeleteMachine(machineId) {
        const updatedPlanMachines = planMachines.filter(
            (machine) => machine.machineId !== machineId
        );
        setPlanMachines(updatedPlanMachines);
    };

    // Allows new machines to be added from the search results to the workout plan
    function handleAddMachine(machineIdToAdd) {
        const newMachine = searchResults.find((machine) => machine.machineId === machineIdToAdd);
        if (newMachine) {
            setPlanMachines([...planMachines, newMachine]);
        }
    }

    // Function to delete all previous plan machines for the active user
    // only used when saving updated plan into the database
    async function deleteAllPlanMachines() {
        const response = await fetch('api/plan/deleteAllPlanMachines', {
            method: 'DELETE',
        });
        const data = await response.json();
        if (data.status) {
            console.log('All previous plan machines deleted successfully!');
        } else {
            console.error('Error deleting plan machines.');
        }
    }

    // Function to add updated workout plan with new machines to the SQL database
    async function savePlanMachines(planMachines) {
        await deleteAllPlanMachines(); // Delete all previous entries first
    
        const response = await fetch('api/plan/addPlanMachines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ planMachines }),
        });
        const data = await response.json();
        if (data.status) {
            console.log('Plan Machines saved successfully!');
        } else {
            console.error('Error saving plan machines.');
        }
      }

    return (
    <>
        <div id='workout-planner-container'>
            <div id='machine-list-container'>
                <h1>Plan Machines</h1>
                <ul>
                    {planMachines.map((machine) => (
                        <li key={machine.machineId}>
                            {machine.name}
                            <button onClick={() => handleDeleteMachine(machine.machineId)}>
                            Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => savePlanMachines(planMachines)}>Save</button>
            </div>
            <div id='search-container'>
                <MachineSearch
                    searchResults={searchResults} // Pass the searchResults state as a prop
                    setSearchResults={setSearchResults} // Pass the setSearchResults function as a prop
                    onAddMachine={handleAddMachine}
                />
            </div>
        </div>
    </>
    );
};

export default WorkoutPlanner;