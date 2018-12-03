import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Content</h1>
        <Link to="about">learn more</Link>
      </div>
    );
  }
}

export default Home;
