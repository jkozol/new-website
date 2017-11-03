import React from 'react';
import Logo from './Logo';
import NavBarTop from './NavBarTop';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="row" id="topNav">
          <div className="col-3">
            <Logo />
          </div>
          <div className="col-9 my-auto">
            <NavBarTop />
          </div>
        </div>
        <div className="mx-0 px-0" id="topNavLine"></div>
      </div>
    );
  }
};

export default Header;
