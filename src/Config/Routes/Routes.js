import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from '../../Pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    </Router>
  )
}

export default Routes;