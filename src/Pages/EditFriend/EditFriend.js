import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import url from 'url';

// Components
import { Input, Button, TopNav, Profile } from '../../Components'

const EditFriend = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [targetFriend, setTargetFriend] = useState({});
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newAge, setNewAge] = useState('')

  const history = useHistory();

  useEffect(() =>{
    const friendList = JSON.parse(localStorage.getItem('friends'));
    const path = url.parse(global.location.href).path;
    const [first, last] = path.substr(path.lastIndexOf('/') + 1).split('-');
    friendList.forEach(friend => (friend.firstName === firstName && friend.lastName === lastName) && setTargetFriend(friend))
    setFirstName(first)
    setLastName(last);
  }, [firstName, lastName])

  const firstNameChange = e => {
    const inputValue = e.target.value
    setNewFirstName(inputValue);
  }

  const lastNameChange = e => {
    const inputValue = e.target.value
    setNewLastName(inputValue);
  }

  const ageChange = e =>{
    const inputValue = e.target.value
    setNewAge(inputValue);
  }

  const editFriend = () =>{
    targetFriend.firstName = newFirstName || firstName;
    targetFriend.lastName = newLastName || lastName;
    targetFriend.age = newAge || targetFriend.age;
  }

  const handleClick = () =>{
    editFriend()
    history.push('/friends');
  }

  return (
    <section className="add-friend-page">
      <TopNav title="Your Friend"/>
      <div className="container">
        <Profile />
        <Input type="text" placeholder={firstName} onChange={e => firstNameChange(e)}/>
        <Input type="text" placeholder={lastName} onChange={e => lastNameChange(e)}/>
        <Input type="text" placeholder={targetFriend.age} onChange={e => ageChange(e)}/>
        <Button title="Save" onClick={() => handleClick()}/>
      </div>
    </section>
  )
}

export default EditFriend;