import React, { /*Component*/ } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Message from './components/message/message';
import Recover from './components/recover/recover';
import Claim from './components/claim/claim';
import Deny from './components/deny/deny';
//import logo from './logo.svg'; //Until ready
import './App.css';

import 'font-awesome/css/font-awesome.min.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Message} />
      <Route exact path="/recover" component={Recover} />
      <Route exact path="/claim" component={Claim} />
      <Route exact path="/deny" component={Deny} />
    </div>
  </Router>
);


export default App;
