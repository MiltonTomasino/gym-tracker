import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PlanForm from './planForm';
import '../../styles/WorkoutPlanner.css';

function WorkoutPlannerComp() {
  const [machineCardList, setMachineCardList] = useState([]);
  const [workoutPlanMachines, setWorkoutPlanMachines] = useState([]);

  // Fetch workout plan machines data from the backend API upon component mount
  useEffect(() => {
    fetchWorkoutPlanMachines();
  }, []);

  // Function to fetch workout plan machines data
  const fetchWorkoutPlanMachines = async () => {
    try {
      const response = await fetch('/api/plan/getPlanMachines');
      const data = await response.json();
      if (data.status) {
        setWorkoutPlanMachines(data.data);
      } else {
        // Handle error, if needed
      }
    } catch (error) {
      console.error('Error fetching workout plan machines:', error);
    }
  };

  // Create a card whenever 'add machine' is clicked
  const createCard = (id) => {
    return (
      <div key={id} className='machine-card'>
        <PlanForm />
        <div className='remove-card'>
          <button type='button' className='remove-button' onClick={() => handleRemoveCard(id)}>
            <span className='button-text'>&#x2613;</span>
          </button>
        </div>
      </div>
    );
  };

  const handleAddCard = () => {
    const id = uuidv4();
    setMachineCardList((prevCard) => [...prevCard, createCard(id)]);
  };

  const handleRemoveCard = (id) => {
    setMachineCardList((prevCard) => prevCard.filter((card) => card.key !== id));
  };

  return (
    <div className='plan-box'>
      {/* Map through the workoutPlanMachines state and display each machine as a card */}
      {workoutPlanMachines.map((machine) => (
        <div key={machine.machineId} className='machine-card'>
          {/* Display machine data here */}
          <p>Machine Name: {machine.name}</p>
          <p>Order: {machine.order}</p>
          {/* ... other machine data */}
          <PlanForm />
          <div className='remove-card'>
            <button type='button' className='remove-button' onClick={() => handleRemoveCard(machine.machineId)}>
              <span className='button-text'>&#x2613;</span>
            </button>
          </div>
        </div>
      ))}

      {/* removes add button when card limit is reached */}
      {machineCardList.length < 8 && (
        <div className='add-card'>
          <button type='button' className='add-button' onClick={handleAddCard}>
            <span>Add Machine</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkoutPlannerComp;
