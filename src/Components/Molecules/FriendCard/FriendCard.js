import React from 'react';
import './friendCard.scss';

// Components
import { Profile } from '../../';

const FriendCard = ({ name, age, profileClick }) => {
  return (
    <div className="friend-card">
      <Profile onClick={ profileClick }/>
      <div className="friend-info">
        <div className="friend-name">
          <h1>{name || "Unknown"}</h1>
        </div>
        <div className="friend-age">
          <h1>{age || "N/A"} Yo</h1>
        </div>
      </div>
    </div>
  )
}

export default FriendCard;