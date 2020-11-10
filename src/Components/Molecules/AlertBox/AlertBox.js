import React from 'react';
import { Button } from '../../Atom';
import './alertBox.scss';

const AlertBox = ({ message, alert, onClick }) => {
  const alertHandler = () =>{
    alert = false;
  }
  return (
    <div className={`alert-box ${alert? "pop-up" : ""}`}>
      <div className="container">
        <div className="message">
          <h1>{ message }</h1>
        </div>
        <div className="buttons-wrapper">
          <Button title="Yes"/>
          <Button title="No" onClick={() => onClick()}/>
        </div>
      </div>
    </div>
  )
}

export default AlertBox;