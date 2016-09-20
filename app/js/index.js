import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import GitHub from './components/GitHub';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Portfolio} />cd
      <Route path='portfolio' component={Portfolio} />
      <Route path='resume' component={Resume} />
      <Route path='github' component={GitHub} />
    </Route>
  </Router>,
  document.getElementById('app')
)