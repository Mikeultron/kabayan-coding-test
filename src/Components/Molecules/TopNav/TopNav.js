import React from 'react';
import { useHistory } from 'react-router-dom'
import './topNav.scss';

// Components
import { Icon } from '../../';

const TopNav = ({title}) => {
  const history = useHistory();
  return (
    <div className="top-nav">
      <Icon className="fas fa-chevron-left" onClick={() => history.goBack()}/>
      <h1>{ title }</h1>
    </div>
  )
}

export default TopNav;