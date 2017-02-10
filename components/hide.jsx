import React from 'react';

export default class extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
  };

  render() {
    return this.props.open && <button onClick={this.props.onClick}>Hide</button>;
  }
}
