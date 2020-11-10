import React from 'react';
import './greeting.scss';

// Components
import { Profile } from '../../';

const Greeting = ({ profileClick, userName }) => {
  return (
    <div className="greeting">
      <div className="greeting-message">
        <h1>Good Evening, <br/>{ userName }</h1>
      </div>
      <Profile onClick={ profileClick }/>
    </div>
  )
}

export default Greeting;