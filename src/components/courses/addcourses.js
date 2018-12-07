import { connect } from 'react-redux';
import { createCourse } from './../../action';
import React, { Component } from 'react';
import { addCourse } from './../../action/index';


class AddCourses extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      category: "",
      length: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addCourse('http://localhost:5000/course', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
  
  
  }

  render() {

    return (
      <div>
        <h1>Add course</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=""> title</label>
          <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
          <br />
          <br />
          <label htmlFor=""> author</label>
          <input type="text" value={this.state.author} name="author" onChange={this.handleChange} />
          <br />
          <br />
          <label htmlFor=""> category</label>
          <input type="text" value={this.state.category} name="category" onChange={this.handleChange} />
          <br />
          <br />
          <label htmlFor=""> length</label>
          <input type="text" value={this.state.length} name="length" onChange={this.handleChange} />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )

  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: (url, param) => dispatch(addCourse(url, param))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCourses);