import React, { useState } from 'react'
import '../../styles/WorkoutPlanner.css'
import Cycle from './WorkoutForms/Cycle'
import Benchpress from './WorkoutForms/Benchpress'

function PlanForm() {

    const [option, setOption] = useState(''); 

    // grabs value from select form
    const handleSelectionChange = (e) => {
        setOption(e.target.value);
    }

    // depending on selected option, different forms will be presented
    const renderSelection = () => {
        
        if (option === 'cycle')
            return (<Cycle />);
        else if (option === 'benchpress')
            return (<Benchpress />)
        else   
            return null;
    }

  return (
    <div>
        <select value={option} onChange={handleSelectionChange}>
            <option value=''>Machine Type</option>
            <option value='cycle'>Cycle Machine</option>
            <option value='benchpress'>Bench Press</option>
        </select> 

        {renderSelection()}
    </div>
  )
}

export default PlanForm