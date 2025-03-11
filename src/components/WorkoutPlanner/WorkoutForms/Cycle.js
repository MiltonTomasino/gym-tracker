import React from 'react'
import '../../../styles/WorkoutPlanner.css'

function Cycle() {
  return (
    <div>
        <label>Goals: </label>
        <div className='input-fields'>
            <input className='number-form' type='number' /> miles<br></br>
            <input className='number-form' type='number' /> time (min)<br/><br/>
            <label>Machine Specs:</label>
            <input className='number-form' type='number' /> Pedal res<br></br>
            <input className='number-form' type='number' /> height (in)
        </div>

        
    </div>
  )
}

export default Cycle