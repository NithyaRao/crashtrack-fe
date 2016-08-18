/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
// import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import CrashTrack from './components/crashtrack/CrashTrack';
import ViewAll from './components/crashtrack/ViewAll';


import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CrashTrack} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="viewall" component={ViewAll} />
    </Route>
  </Router>
  , document.getElementById('root'));
