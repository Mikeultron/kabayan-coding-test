import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Splash, OnBoard, Dashboard, Friends, UserProfile, AddFriend, DetailFriend, Menu, About, EditFriend } from '../';

const Main = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={ Splash }/>
          <Route path="/onboard" component={ OnBoard }/>
          <Route path="/dashboard" component={ Dashboard }/>
          <Route path="/menu" component={ Menu }/>
          <Route path="/about" component={ About }/>
          <Route path="/friends/add" component={ AddFriend }/>
          <Route path="/friends/detail" component={ DetailFriend }/>
          <Route path="/friends/edit" component={ EditFriend }/>
          <Route path="/friends" component={ Friends }/>
          <Route path="/profile" component={ UserProfile }/>
          <Redirect from="/" to={user? "/dashboard" : "/home"}/>
        </Switch>
      </Router>
    </div>
  )
}

export default Main;