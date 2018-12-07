import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCourses } from './../../action/index';



class CourseList extends Component {

  componentDidMount() {
    this.props.fetchCourses('http://localhost:5000/courses');
  }

  render() {
    const courseList = this.props.courses.map((course)=>{
      return (      
          <li key={course.title}> title : {course.title} | author : {course.author} | category : {course.category} length : {course.length} | <Link to={"/course/edit/"+course.title}>edit</Link></li>
      )
    })
    
    return (
      <ul>
      {courseList}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchCourses: (url) => dispatch(fetchCourses(url))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(CourseList);

