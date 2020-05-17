import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import NotFoundPage from '../components/NotFoundPage';
import ServicesPage from '../components/ServicesPage';

import PublicRoute from './PublicRouter';
import LoginPage from '../components/LoginPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />       
        <Route path="/login" component={LoginPage}  />                 
         <Route path="/services" component={ServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;