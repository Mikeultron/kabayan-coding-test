import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { BottomNav, FriendCard, TopNav } from '../../Components';

const Friends = () => {
  const history = useHistory();
  const [friends, setFriends] = useState([]);
  useEffect(() =>{
    const friendList = JSON.parse(localStorage.getItem('friends'));
    setFriends(friendList)
  }, [])
  return (
    <section className="friends-page">
      <TopNav title="Friend List"/>
      <div className="friends-wrapper">
        {friends.map((friend, i) =>{
          return <FriendCard 
            name={`${friend.firstName} ${friend.lastName}`} 
            age={friend.age} key={i}
            profileClick={() => history.push(`friends/detail/${friend.firstName}-${friend.lastName}`)}
          />
        })}
      </div>
      <BottomNav 
        rightIcon="fas fa-home"
        leftOnClick={() => history.push('/friends/add')}
        rightOnClick={() => history.push('/dashboard')}
      />
    </section>
  )
}

export default Friends;