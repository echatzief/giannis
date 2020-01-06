import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from './components/Login'
import NotFound from './components/NotFound'
import 'antd/dist/antd.css'
import './css/main.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/game' component={App}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
,document.getElementById('root'));