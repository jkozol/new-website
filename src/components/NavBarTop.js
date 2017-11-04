import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBarTop extends React.Component {
  render() {
    const navLine = {
      // content: "",
      // borderTopColor: this.props.colorActive,
      // display: "block",
      borderBottom: "2px solid " + this.props.colorActive,
      // margin: "0 15px",
    };

    const navStyle = {
      // display: "block",
      borderTop: "2px solid " + this.props.colorActive,
      borderLeft: "2px solid " + this.props.colorActive,
      borderRight: "2px solid " + this.props.colorActive,
      borderBottom: '20px solid white !important',
    };

    return (
      <ul className="nav" style={navLine}>
        <div className="nav-item dropdown mx-3">
          <NavLink className="nav-link" to="/about" activeStyle={navStyle}>About</NavLink>
        </div>
        <div className="nav-item dropdown mx-3">
          <NavLink className="nav-link" to="/work" activeStyle={navStyle}>Work</NavLink>
        </div>
      </ul>
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


export default connect(makeMapStateToProps)(NavBarTop);
