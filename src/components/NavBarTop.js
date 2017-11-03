import React from 'react';
import { Link } from 'react-router-dom';

class NavBarTop extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/about">Background</Link>
            <div className="dropdown-divider invisible"></div>
            <Link className="dropdown-item" to="/">Skills</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/">Beliefs</Link>
          </div>
        </li>
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Work</a>
          <div className="dropdown-menu drowdown-menu-center">
            <Link className="dropdown-item" to="/about">Weldr</Link>
            <Link className="dropdown-item" to="/">Phagebook</Link>
          </div>
        </li>
      </ul>
    );
  }
};

export default NavBarTop;
