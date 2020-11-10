import React from 'react';
import './bottomNav.scss';

import { Icon } from '../../';

const BottomNav = ({leftIcon, rightIcon, leftOnClick, rightOnClick}) => {
  return (
    <div className="bottom-nav">
      <div className="nav-icons">
        <div className="left-icon">
          <Icon className={leftIcon || "fas fa-user-plus"} onClick={leftOnClick}/>
        </div>
        <div className="right-icon">
          <Icon className={rightIcon || "fas fa-address-book"} onClick={rightOnClick}/>
        </div>
      </div>
    </div>
  )
}

export default BottomNav;