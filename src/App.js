import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContIn from './components/ContIn';
import ContOut from'./components/ContOut';

import './static/CSS/App.css'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route exact={true} path='/contin' component={ContIn} />
        <Route exact={true} path='/contout' component={ContOut} />
      </div>
    </Router>
  );
};

export default App;