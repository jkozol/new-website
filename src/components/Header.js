import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="row" id="topNav">
        <div className="col-3">
          <NavLink className="nav-link" id="logo" to='/home'>Jacob</NavLink>
        </div>
        <div className="col-9 my-auto">
          <ul className="nav">
            <li className="nav-item dropdown align-middle">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
              <div className="dropdown-menu">
                <NavLink className="nav-link" to='/about'>Background</NavLink>
                <NavLink className="nav-link" to='/about'>Skills</NavLink>
                <NavLink className="nav-link" to='/about'>Why</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Work</a>
              <div className="dropdown-menu">
                <NavLink className="nav-link" to='/work'>Weldr</NavLink>
                <NavLink className="nav-link" to='/work'>Phagebook</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Header;
