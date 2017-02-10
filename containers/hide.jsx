import {connect} from 'react-redux';
import HideButton from '../components/hide';
import {toggleShown} from '../actions/layout';

const mapStateToProps = (state) => {
  return {
    open: state.layout.shown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(toggleShown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HideButton);
