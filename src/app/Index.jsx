import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Alert } from '../components/Alert';
import { NavTabs } from '../components/Nav';
import { Home } from '../home/Index';
import { Students } from '../students/Index';
import { Teachers } from '../teachers/Index';

function App () {
  const { pathname } = useLocation();

  return (
    <div className="app-container bg-light">
      <NavTabs />
      <Alert />
      <div className="container pt-4 pb-4 mt-5">
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  )
}

export default App;