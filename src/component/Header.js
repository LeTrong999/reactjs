import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <nav style={{position: 'fixed', top: 0, left: 0, display: 'block', zIndex: 10}}>
        <div className="nav_toggle">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/todolist">TodoList</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
