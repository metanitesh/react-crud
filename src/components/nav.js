import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/courses">Contact</Link> </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;


