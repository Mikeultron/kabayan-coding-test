import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './userProfile.scss';

// Components
import { Button, Input, Profile, TopNav } from '../../Components';

const UserProfile = () => {
  const [newName, setNewName] = useState('');
  const history = useHistory();

  const nameChange = e =>{
    const inputValue = e.target.value
    setNewName(inputValue);
  }

  const editProfile = () =>{
    localStorage.setItem('user', newName);
    history.push('/dashboard')
  }

  return (
    <section className="user-profile-page">
      <TopNav title="Profile"/>
      <div className="container">
        <Profile />
        <Input type="text" autoComplete="off" required onChange={e => nameChange(e)}/>
        <Button type="submit" title="Continue" onClick={() => editProfile()}/>
      </div>
    </section>
  )
}

export default UserProfile;