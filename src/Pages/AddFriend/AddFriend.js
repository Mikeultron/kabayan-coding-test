import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './addFriend.scss';

// Components
import { Button, Input, Profile, TopNav } from '../../Components';

const AddFriend = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  
  const saveFriend = () =>{
    const previousFriends = JSON.parse(localStorage.getItem('friends'));
    const friendArr = !previousFriends? [] : previousFriends;
    const friendData = {
      firstName,
      lastName,
      age
    }
    friendArr.push(friendData);
    localStorage.setItem('friends', JSON.stringify([...friendArr]));
  }

  const clickHandler = () =>{
    saveFriend()
    history.push('/friends');
  }

  const history = useHistory();
  return (
    <section className="add-friend-page">
      <TopNav title="Your Friend"/>
      <div className="container">
        <Profile />
        <Input type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
        <Input type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
        <Input type="text" placeholder="Age" onChange={e => setAge(e.target.value)}/>
        <Button title="Save" onClick={() => clickHandler()}/>
      </div>
    </section>
  )
}

export default AddFriend;