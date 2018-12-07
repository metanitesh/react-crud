import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/courses/courses';
import AddCourse from './components/courses/addcourses';
import EditCourse from './components/courses/editCourse';
import './App.css';



class App extends Component {

  constructor(){
    super();
  }

  render() {  
    return (
      <div className="App">
        <Header />
        <Switch>
          
          <Route exact path='/' component={Home}/>
          <Route exact path='/Home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/course/edit/:title' render={(props) => <EditCourse {...props} />} />
          <Route path='/courses' render={(props) => <Courses {...props}  />} />
          <Route path='/course' render={(props) => <AddCourse {...props} />} />
          
          
        </Switch>
      </div>
    );
  }
}

export default App;
