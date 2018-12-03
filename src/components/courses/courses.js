import React, { Component } from 'react';


class Courses extends Component {

  constructor(){
    super();
    this.addCourse = this.addCourse.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      courses : [{
        title : "Javascript",
        mentor : "Nitesh"
      }, {
        title : "Python",
        mentor : "Shantu"
      }],
      input: ""
    }
  }

  handleChange(event){
    this.setState({input: event.target.value});
  }


  addCourse(e){
    e.preventDefault();
    this.setState((state, props) => {
      
      return state.courses.push({
        title: state.input,
        mentor: "some"
      });

    
    })
    
  }
  

  render() {
    const courseList = this.state.courses.map((course)=>{
      return <li key={course.title}>title : {course.title} | author : {course.mentor}</li>
    })

    return (
      <div>
       <ul>
         {courseList}
       </ul>

       <form onSubmit={this.addCourse}>
         <input type="text" value={this.state.input} onChange={this.handleChange}/>
         <input type="submit" value="add-courses"/>
       </form>
      </div>
    );
  }
}

export default Courses;
