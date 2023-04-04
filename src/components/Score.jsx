import React from 'react';
import './score.css';
import { useNavigate } from 'react-router';
function Score(props) {
   const navi=useNavigate(); 
  return (
    <div className='score'>
        <h1 className='heading1'>SCORE-BOARD</h1>
        <div className="board">
            <h1>Your score:--</h1>
            <h3>{props.sc}/5</h3>
        </div>
        <button id='again' onClick={()=>navi('/category')}>Click here to play again</button>
    </div>
  )
}

export default Score;