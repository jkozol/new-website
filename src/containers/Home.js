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
          <StyledDiv className="col-6 offset-1" id="content" colorActive={this.props.colorActive}>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet quis diam nec elementum. Nullam placerat odio vel est ornare, nec blandit ipsum mollis. Donec sagittis, purus id venenatis imperdiet, tellus quam vulputate lacus, et venenatis enim lacus id dui. Sed fringilla non orci nec imperdiet. Phasellus quis sollicitudin neque, et aliquam lectus. Curabitur ornare neque erat, vitae convallis sem hendrerit vel. Integer nec enim blandit, elementum massa consequat, laoreet lacus. Suspendisse accumsan, felis eget consectetur fermentum, nisi arcu pretium lectus, ut elementum nunc elit ornare libero. Quisque gravida lacus ac convallis scelerisque. Maecenas vulputate scelerisque dolor, vitae fermentum nibh auctor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra elit et faucibus sollicitudin. Maecenas id imperdiet neque.

Proin et enim quis felis congue sagittis. Praesent vitae ex quis odio volutpat rhoncus sed vitae risus. Nam aliquet facilisis erat, sed lobortis odio gravida sed. Aenean vitae est eget dolor rutrum dapibus nec quis velit. Sed justo sapien, luctus nec dapibus non, imperdiet vitae sem. Nullam fringilla sed metus et sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tortor ipsum, pretium sit amet convallis eu, tincidunt ac quam. Mauris nunc risus, porttitor ut felis vel, bibendum ornare magna. In justo nibh, consectetur ut ullamcorper sit amet, laoreet sit amet diam. Maecenas tortor metus, laoreet ac tortor id, euismod egestas turpis. Nullam in viverra erat.

Pellentesque ut lacus ac dolor mollis viverra in sit amet orci. Cras sit amet augue lacus. Aenean lacus tellus, tristique vel auctor eu, malesuada vitae massa. Sed laoreet non augue sed viverra. Sed a suscipit mauris. Etiam nibh erat, mollis ac tempor ac, cursus vitae quam. Quisque accumsan viverra elit id accumsan. Integer sit amet viverra massa. Fusce aliquet sit amet ex eu blandit. Donec fringilla tellus sed augue dapibus convallis. Pellentesque blandit vehicula justo, sit amet eleifend massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi urna nulla, rutrum at dignissim sit amet, pellentesque eu dui.

Praesent at volutpat ante. Donec ac enim quis lorem aliquam ultricies. Vivamus convallis luctus cursus. Duis eget posuere leo, vitae fringilla dolor. Cras velit nunc, commodo eget malesuada in, fermentum sit amet ex. Suspendisse dictum, leo non semper convallis, ligula enim aliquam magna, quis tempor felis augue id metus. Morbi ligula justo, porta sed interdum vitae, volutpat a mauris. Morbi ut augue nec velit cursus consectetur. Donec hendrerit sed nibh quis egestas.

Praesent luctus, eros nec suscipit venenatis, felis metus lacinia sem, a egestas nisi neque nec nulla. Nulla facilisi. Cras consequat velit non vestibulum eleifend. In risus felis, viverra in lacus eget, suscipit faucibus massa. Nunc ut urna eget turpis interdum consequat non sit amet ante. Duis ut venenatis neque. Quisque ut venenatis justo. Proin ac condimentum ligula. Praesent dictum congue scelerisque. Pellentesque rutrum turpis ac molestie molestie. Donec viverra commodo suscipit. Morbi leo sem, interdum nec justo at, rhoncus consectetur odio. Nam sed velit tincidunt, volutpat purus ut, fermentum massa.

</p>
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
