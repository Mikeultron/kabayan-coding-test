import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import url from 'url';
import './detailFriend.scss';

// Components
import { Profile, TopNav, BottomNav, AlertBox } from '../../Components';

const DetailFriend = () => {
  const [alert, setAlert] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [targetFriend, setTargetFriend] = useState({})

  useEffect(() =>{
    const path = url.parse(global.location.href).path;
    const [first, last] = path.substr(path.lastIndexOf('/') + 1).split('-');
    const friendList = JSON.parse(localStorage.getItem('friends'));
    friendList.forEach(friend => (friend.firstName === firstName && friend.lastName === lastName) && setTargetFriend(friend))
    setFirstName(first);
    setLastName(last);
    return () => {}
  }, [firstName, lastName])

  const alertHandler = () => setAlert(prev => prev = !prev)
  const history = useHistory();
  return (
    <section className="detail-friend-page">
      <TopNav title="Detail"/>
      <div className="container">
        <Profile />
        <div className="friend-details">
          <div className="friend-name">
            <h1>{`${firstName} ${lastName}`}</h1>
          </div>
          <div className="friend-age">
            <h1>{targetFriend.age} Y'o</h1>
          </div>
        </div>
        <AlertBox 
          message="Oh no! are you sure want to delete your friend?"
          alert={alert}
          onClick={() => alertHandler()}
        />
      </div>
      <BottomNav 
        leftIcon="fas fa-user-edit"
        rightIcon="fas fa-times"
        leftOnClick={() => history.push(`/friends/edit/${firstName}-${lastName}`)}
        rightOnClick={() => alertHandler()}
      />
    </section>
  )
}

export default DetailFriend;