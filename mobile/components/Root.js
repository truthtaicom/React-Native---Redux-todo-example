import React, { PureComponent, PropTypes } from 'react';
import { View } from 'react-native';
import AddToDoContainer from '../containers/AddToDoContainer';
import ToDoListContainer from '../containers/ToDoListContainer';
import NavBar from './NavBar';
import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'Root'

  static propTypes = {
    error: PropTypes.string,
    message: PropTypes.string,
  }

  state = {
    filter: 'all',
  }

  changeVisible = filter => this.setState({ filter })

  render() {
    const { filter } = this.state;

    return (<View style={styles.container}>
      <AddToDoContainer />
      <NavBar changeVisible={this.changeVisible} visible={filter} />
      <ToDoListContainer filter={filter} />
    </View>);
  }
}
