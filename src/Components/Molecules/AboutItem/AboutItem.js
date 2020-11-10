import React from 'react';
import './aboutItem.scss';

const AboutItem = ({ mute, title, ...rest}) => {
  return (
    <div className="about-item" { ...rest }>
      <div className="about-info">
        <h1 className="about-mute">{ mute }</h1>
        <h1 className="about-title">{ title }</h1>
      </div>
    </div>
  )
}

export default AboutItem;