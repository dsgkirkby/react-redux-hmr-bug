import React from 'react';

import Hide from '../containers/hide';
import Show from '../containers/show';

class MainApp extends React.Component {
  render() {
    return <div>
      <Show/>
      <Hide/>
    </div>
  }
}

export default MainApp;
