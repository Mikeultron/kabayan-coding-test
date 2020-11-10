import React from 'react';
import { useHistory } from 'react-router-dom';


// Components
import { MenuItem, TopNav } from '../../Components';

const Menu = () => {
  const history = useHistory();
  return (
    <section className="menu-page">
      <TopNav title="Menu"/>
      <div className="container">
        <MenuItem 
          title="Edit Profile" 
          onClick={() => history.push('/profile')}
        />
        <MenuItem 
          title="About"
          onClick={() => history.push('/about')}
        />
        <MenuItem title="Logout" onClick={() => history.push('/home')}/>
      </div>
    </section>
  )
}

export default Menu;