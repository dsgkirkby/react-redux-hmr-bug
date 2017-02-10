import {connect} from 'react-redux';
import Main from '../components/main';

const mapStateToProps = (state) => {
  return {
    selectedView: state.layout.openView,
    viewArgs: state.layout.openViewArgs
  };
};

export default connect(mapStateToProps)(Main);
