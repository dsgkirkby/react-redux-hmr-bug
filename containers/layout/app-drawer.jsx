import {connect} from 'react-redux';
import AppDrawer from '../../components/layout/app-drawer';
import {toggleAppDrawer,switchView} from '../../actions/layout';

const mapStateToProps = (state) => {
  return {
    open: state.layout.appDrawerOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestChange: () => dispatch(toggleAppDrawer()),
    onViewSelect: (type) => dispatch(switchView(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDrawer);
