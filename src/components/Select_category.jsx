import React from 'react';
import './Select_category.css';
import { useNavigate } from 'react-router';
export default function Select_category() {
const navi= useNavigate();

  return (
    <div className='containers'>
      <h3>Choose Category...</h3>
      <div className='options'>
        <button onClick={()=>navi('/category/10')} id='a'>General Knowledge</button>
        <button onClick={()=>navi('/category/11')}>Entertainment:Television</button>
        <button onClick={()=>navi('/category/12')}>Science:Computers</button>
        <button onClick={()=>navi('/category/13')}>Vehicles</button>
        <button onClick={()=>navi('/category/14')}>Celebrities</button>
    </div>
    </div>
  )
}