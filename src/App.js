import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/home'; 
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Righter from './components/Righter';
import Login from './container/Login';
import List from './container/List'
import {Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <div className="main">
              <div className="content">             
                <Redirect from = '/'  to = '/home/all' />
                <Redirect from = '/home'  to = '/home/all' />
                <Route path='/api' component={Api}/>
                <Route path='/about' component={About}/>
                <Route path='/start' component={Start}/>
                <Route path='/login' component={Login}/>
                <Route path='/topic/:id' component={List}/>
                <Route path='/home' component={Home} /> 
              </div>
              <Righter/>
          </div>
      </div>
      </Router>
  );
}

export default App;
