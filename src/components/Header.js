import React from 'react';
import Logo from './Logo';
import NavBarTop from './NavBarTop';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const navLine = {
      // content: "",
      // borderTopColor: this.props.colorActive,
      // display: "block",
      borderBottom: "2px solid " + this.props.colorActive,
      // margin: "0 15px",
    };

    return (
      <div>
        <div className="row" id="topNav">
          <div className="col-3" style={navLine}>
            <Logo />
          </div>
          <div className="col-9 my-auto">
            <NavBarTop />
          </div>
        </div>
      </div>
    );
  }
};

const makeMapStateToProps = (state, props) => {
  const mapStateToProps = (state, props) => {
    return {
      colorText: state.colors.colorText,
      colorActive: state.colors.colorActive,
      colorHover: state.colors.colorHover,
    }
  };
  return mapStateToProps;
};


export default connect(makeMapStateToProps)(Header);
