/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Person from './components/crashtrack/Person';
import Car from './components/crashtrack/Car';
import Claim from './components/crashtrack/Claim';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="person" component={Person} />
      <Route path="car" component={Car} />
      <Route path="claim" component={Claim} />
    </Route>
  </Router>
  , document.getElementById('root'));
