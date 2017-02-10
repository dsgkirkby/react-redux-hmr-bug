import {connect} from 'react-redux';
import {AppBar} from 'material-ui';
import {toggleAppDrawer} from '../../actions/layout';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLeftIconButtonTouchTap: () => dispatch(toggleAppDrawer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
