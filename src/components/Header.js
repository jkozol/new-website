import React from 'react';
import Logo from './Logo';
import NavBarTop from './NavBarTop';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    const navLine = {
      // content: "",
      // borderTopColor: this.props.colorActive,
      // display: "block",
      borderBottom: "2px solid " + this.props.colorActive,
      // margin: "0 15px",
    };

    const StyledDiv = styled.div`
      // margin-bottom: -1px;
      padding: 0px;
      margin: 0px;
      // position: relative;
      // top: -1px;
      // border-bottom: 2px solid ${props => props.colorActive};
      // $:after {
      //   border-bottom: 2px solid ${props => props.colorActive};
      // };
      // $:before {
      //   border-bottom: 2px solid ${props => props.colorActive};
      // };
    `;


    return (
      <div>
        <div className="row" id="topNav">
          <div className="col-3" style={navLine}>
            <Logo />
          </div>
          <StyledDiv className="col-9 my-auto" colorActive={this.props.colorActive}>
            <NavBarTop />
          </StyledDiv>
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
