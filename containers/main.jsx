import {connect} from 'react-redux';
import Main from '../components/main';

const mapStateToProps = () => {
  return {};
};

const container = connect(mapStateToProps)(Main);

container.prototype.componentDidUpdate = () => {
  console.log('CDU v1');
};

export default container;
