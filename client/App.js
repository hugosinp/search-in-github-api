import React from 'react';

import { Provider } from 'react-redux'
import store from './src/redux/store'

import MainView from './src/views/MainView'

export default function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}
