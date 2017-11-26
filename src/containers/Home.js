import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';


class Home extends React.Component {
  render() {
    const links = [
      {
        name: 'Home',
        path: '/home',
        color: 'red',
      },
      {
        name: 'About',
        path: '/about',
        color: 'green',
      },
    ];

    const StyledDiv = styled.div`
      outline-style: solid;
      outline-color: ${props => props.colorActive};
      background-color: white;
      box-shadow: 5px 5px 7px #888888;
    `;


    return (
      <div className="container-fluid">
        <Header />
        <div className="row mt-5" id="pageBody">
          <div className="col-2 ml-5">
            <Sidebar links={links}/>
          </div>
          <StyledDiv className="col-8 offset-1" id="content" colorActive={this.props.colorActive}>
            <h1>Home</h1>
            <p>Welcome home!</p>
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

const mapDispatchToProps = (dispatch) => ({
  setColorActive: color => {
    dispatch(setColorActive(color));
  },
  setColorText: color => {
    dispatch(setColorText(color));
  },
  setColorHover: color => {
    dispatch(setColorHover(color));
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Home);
