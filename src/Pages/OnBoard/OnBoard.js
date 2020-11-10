import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './onBoard.scss';

// Components
import { Button, Profile, Input } from '../../Components';

const OnBoard = () => {
  const history= useHistory();
  const [inputValue, setInputValue] = useState('');

  const inputValueHandler = (e) =>{
    const currentInput = e.target.value
    setInputValue(currentInput)
  }

  const storeUser = () => localStorage.setItem('user', inputValue);

  const inputCheck = () => inputValue? history.push('/dashboard') : history.push('/onboard');

  const submitForm = () =>{
    inputCheck();
    storeUser();
  }

  return (
    <section className="onboard-page">
      <div className="container">
        <div className="content-title">
          <h1>Set Your Personalize</h1>
        </div>
        <Profile />
        <Input 
          type="text" 
          autoComplete="off" 
          value={inputValue} 
          onChange={e => inputValueHandler(e)}
          placeholder={!inputValue && "Please enter your name"}
        />
        <Button type="submit" title="Continue" onClick={() => submitForm()}/>
      </div>
    </section>
  )
}

export default OnBoard;