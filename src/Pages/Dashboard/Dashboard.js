import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './dashboard.scss';

// Components
import { Greeting, PostItem, BottomNav } from '../../Components';

const Dashboard = () => {
  const [userName, setUsername] = useState('');
  const history = useHistory();
  useEffect(() =>{
    const username = localStorage.getItem('user')
    setUsername(username);
  }, [])

  return (
    <section className="dashboard-page">
      <div className="container">
        <Greeting profileClick={() => history.push('/menu')} userName={userName}/>
        <div className="posts-wrapper">
          <PostItem backgroundColor="#6C63FF" />
          <PostItem backgroundColor="#FF6584" />
          <PostItem backgroundColor="#FFB8B8" />
          <PostItem backgroundColor="#FF6584" />
          <PostItem backgroundColor="#6C63FF" />
        </div>
        <BottomNav
          leftOnClick={() => history.push('/friends/add')}
          rightOnClick={() => history.push('/friends')}
        />
      </div>
    </section>
  )
}

export default Dashboard;