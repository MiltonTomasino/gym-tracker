import React from 'react'
import WorkoutPlannerComp from '../../WorkoutPlanner/WorkoutPlannerComp'
import '../../../styles/Profile.css'
import { useState } from 'react'
import Summary from '../../WorkoutPlanner/Summary';

function Workoutplan() {

  const [activeComponent, setActiveComponent] = useState('plan');

  return (
    <div className='dashboard-workoutplan'>
      <h2>Prepare and plan out your Workout</h2>
      <ul>
        <li onClick={ () => setActiveComponent("plan")} id='item'> Plan</li>
        <li onClick={ () => setActiveComponent("summary")} id='item'>Summary</li>
      </ul>
      {activeComponent === 'plan' && (<WorkoutPlannerComp />)}
      {activeComponent === 'summary' && (<Summary />)}
    
    </div>
  )
}

export default Workoutplan