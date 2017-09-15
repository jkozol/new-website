import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <Link to="/" className="navbar-brand">Jacob Kozol</Link>
    );
  }
};

export default Logo;
