import React from 'react'
// import '../../styles/WorkoutPlanner.css'
import '../../../styles/WorkoutPlanner.css'

function Benchpress() {
  return (
    <div>
        <label>Goals: </label>
        <div className='input-fields'>
            <input className='number-form' type='number' /> lbs.<br></br>
            <input className='number-form' type='number' /> reps <br/><br/>
            <label>Machine Specs:</label>
            <input className='number-form' type='number' /> Seat incline<br></br>
        </div>
    </div>
  )
}

export default Benchpress