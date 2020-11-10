import React from 'react';
import './menuItem.scss';

// Components
import { Icon } from '../../Atom';

const MenuItem = ({ mute, title, ...rest }) => {
  return (
    <div className="menu-item" { ...rest }>
      <div className="menu-info">
        <h1 className="menu-title">{ title }</h1>
      </div>
      <Icon className="fas fa-chevron-right"/>
    </div>
  )
}

export default MenuItem;