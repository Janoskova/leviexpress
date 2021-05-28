import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer/index';
import Header from './Header/index';
import Home from './Home/index';
import Reservation from './Reservation/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';

import './style.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/reservation">
        <Reservation />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
