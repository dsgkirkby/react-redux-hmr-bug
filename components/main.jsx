import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppDrawer from '../containers/layout/app-drawer';
import AppBar from '../containers/layout/app-bar';
import ViewMapping from '../constants/mappings/view-components';

class MainApp extends React.Component {
  static propTypes = {
    selectedView: React.PropTypes.string,
    viewArgs: React.PropTypes.object
  };

  render() {
    const View = ViewMapping[this.props.selectedView];

    return <MuiThemeProvider>
      <div>
        <AppBar title="React-Redux HMR Bug" style={{marginBottom: '25px'}}/>
        <View {...this.props.viewArgs}/>
        <AppDrawer/>
      </div>
    </MuiThemeProvider>
  }
}

export default MainApp;
