import React, { Component } from 'react';
import CourseList from './courselist';
import {Link} from 'react-router-dom';

class Courses extends Component {

  render() {
    return (
      <div>
        <CourseList/>
        <Link to="/course">Add Course</Link>
      </div>
    );
  }
}

export default Courses;
