import React from 'react';
import { NavLink } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <NavLink className="navbar-brand" id="logo" to='/home'>Jacob</NavLink>
    );
  }
};

export default Logo;
