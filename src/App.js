import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import reducers from './reducers/MainReducer';
import RootSagas from './sagas/RootSaga';
import Routes from "./Routes";


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(RootSagas);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <HashRouter>
            <Routes />
          </HashRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;