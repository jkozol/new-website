import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <NavLink className="navbar-brand" id="logo" to='/home'>Jacob</NavLink>
    );
  }
};

export default Logo;
