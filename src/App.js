import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/courses/courses';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/courses' component={Courses}/>
        </Switch>
      </div>
    );
  }
}

export default App;
