import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCourse } from './../../action';


class EditCourse extends Component {

  constructor(props){
    super(props);

    const title = this.props.match.params.title
    console.log(title)
    const courses = this.props.courses
    console.log(courses);

    const course = courses.filter((course) => {
      return course.title === title
    })[0]

    console.log(course)

    this.state = {
        title: course.title,
        author: course.author,
        category: course.category,
        length: course.length
    }

    console.log(this.state)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    const name = e.target.name;
    this.setState({
      [name] : e.target.value
    })
  }

  handleSubmit(e){
    
    e.preventDefault();
    this.props.editCourse(this.state)
  }

  render() {

    return (
      <div>
        <h1>Edit course</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=""> title</label>
          <input type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
          <br/>
          <br/>
          <label htmlFor=""> author</label>
          <input type="text" value={this.state.author} name="author" onChange={this.handleChange}/>
          <br/>
          <br/>
          <label htmlFor=""> category</label>
          <input type="text" value={this.state.category} name="category" onChange={this.handleChange}/>
          <br/>
          <br/>
          <label htmlFor=""> length</label>
          <input type="text" value={this.state.length} name="length" onChange={this.handleChange}/>
          <br/>
          <br/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
    
  }
}
const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCourse: course => {
      dispatch(editCourse(course));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCourse);
