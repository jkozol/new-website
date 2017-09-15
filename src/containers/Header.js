import React from 'react';
import NavBarTop from '../components/NavBarTop';
import Logo from '../components/Logo';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Logo />
        </div>
        <div className="col-md-4 offset-md-2 ">
          <NavBarTop />
        </div>
      </div>
    );
  }
};

export default Header;
