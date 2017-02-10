import React from 'react';
import {Drawer, AppBar, Menu, MenuItem} from 'material-ui';
import viewLabels from '../../constants/mappings/view-labels';
import viewComponents from '../../constants/mappings/view-components';
import _ from 'underscore';

export default class extends React.Component {
  static propTypes = {
    onRequestChange: React.PropTypes.func.isRequired,
    onViewSelect: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
  };

  render() {
    const MenuOptions = _.keys(viewComponents).map((viewType) =>
      <MenuItem
        key={viewType}
        primaryText={viewLabels[viewType]}
        onTouchTap={() => this.props.onViewSelect(viewType)}
      />);

    return (
      <Drawer open={this.props.open} docked={false} onRequestChange={this.props.onRequestChange}>
        <AppBar onLeftIconButtonTouchTap={this.props.onRequestChange}/>
        <Menu>
          {MenuOptions}
        </Menu>
      </Drawer>
    );
  }
}
