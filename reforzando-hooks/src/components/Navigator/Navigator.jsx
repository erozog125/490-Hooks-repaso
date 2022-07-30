import React from 'react';
import { Link } from 'react-router-dom';

export const Navigator = () => {
  return (
    <nav>
      <Link to="/changeStyle">Change Style</Link> 
      <Link to="/changeText">Change Text</Link> 
      <Link to="/listNames">List Names</Link> 
      <Link to="/tweet">Tweet</Link> 
      <Link to="/">Clock</Link> 
    </nav>
  )
}
