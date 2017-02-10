import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const renderApp = () => {
  const MainApp = require('./containers/main').default;
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MainApp/>
      </Provider>
    </AppContainer>,
    document.getElementById('ca-entry-tracking')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./containers/main', renderApp);
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
}
