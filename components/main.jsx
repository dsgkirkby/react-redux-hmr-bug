import React from 'react';

import Hide from '../containers/hide';
import Show from '../containers/show';

class MainApp extends React.Component {
  render() {
    return <div>
      <Show name="show"/>
      <Hide name="hide"/>
    </div>
  }
}

export default MainApp;
