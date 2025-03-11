import React from 'react'
function Summary() {

    // Dummy data

    // cycling
    var miles = 2;
    var time = 15;

    // bench press
    var weight = 200;
    var reps = 5;



  return (
    <div className='summary'>
        <h1>Summary:</h1>
        <p>
            You cycled {miles} miles in {time} minutes <br /><br />
            You lifted {weight} ilbs in {reps} reps
        
        </p>
    </div>
  )
}

export default Summary