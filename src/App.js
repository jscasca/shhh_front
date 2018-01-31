import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Message from './components/message/message';
import Recover from './components/recover/recover';
import logo from './logo.svg';
import './App.css';

import 'font-awesome/css/font-awesome.min.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Message} />
      <Route exact path="/recover" component={Recover} />
    </div>
  </Router>
);


export default App;
