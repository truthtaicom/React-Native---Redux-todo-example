import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configStore from '../app/store';
import RootContainer from './containers/RootContainer';

const store = configStore();

export default class extends PureComponent {
  static displayName = 'App'

  state = {}

  render() {
    return (<Provider store={store}>
      <RootContainer />
    </Provider>);
  }
}
