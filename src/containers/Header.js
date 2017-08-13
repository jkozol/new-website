import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">React2Gifs</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item" key={1}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Header;
