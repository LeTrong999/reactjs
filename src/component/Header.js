import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actLogout} from './../actions/index';
class Header extends Component {
    HandleLogout = () => {
        this.props.handlelogout();
    }
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
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/todolist">TodoList</Link></li>
            <li style={{color:'red'}} onClick={()=>this.HandleLogout()}>Logout</li>
        </ul>
      </nav>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlelogout: () => {
            dispatch(actLogout());
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);
