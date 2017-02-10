import React from 'react';

export default class extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
  };

  render() {
    return <button onClick={this.props.onClick}>Show</button>;
  }
}
