import {connect} from 'react-redux';
import {toggleShown} from '../actions/layout';
import Show from '../components/show';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(toggleShown())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Show);
