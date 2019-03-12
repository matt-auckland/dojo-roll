import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import CreateTraining from './CreateTraining';
import ViewMembers from './ViewMembers';
import ViewTrainings from './ViewTrainings';
import RegisterMember from './RegisterMember';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/members/view" component={ViewMembers} />
      <Route exact path="/members/register" component={RegisterMember} />
      <Route exact path="/trainings/create" component={CreateTraining} />
      <Route exact path="/trainings/view" component={ViewTrainings} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
