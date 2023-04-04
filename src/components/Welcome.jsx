import React from 'react';
import './welcome.css';
import { useNavigate } from 'react-router-dom';
function Welcome() {
    const navig=useNavigate();
  return (
    <div className='div'>
        <h1>Welcome to the MASTER MINDS</h1>
        <p>Here,you willl get a chance to test your knowledge and compete with yourself.</p>
        <button onClick={()=>navig("/category")}>START</button>
    </div>
  )
}

export default Welcome;