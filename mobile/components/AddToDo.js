import React, { PureComponent, PropTypes } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'AddToDo'

  static propTypes = {
    addTodo: PropTypes.func,
  }

  state = {
    todo: '',
  }

  inputTodo = todo => this.setState({ todo })

  addNewTodo = () => {
    this.props.addTodo({
      name: this.state.todo,
      completed: false,
    });
    this.setState({
      todo: '',
    });
  }

  render() {
    return (<View style={styles.addTodo}>
      <TextInput
        onChangeText={this.inputTodo}
        style={styles.input}
        value={this.state.todo}
      />
      <TouchableHighlight
        onPress={this.addNewTodo}
        style={styles.button}
      >
        <Text> Add todo </Text>
      </TouchableHighlight>
    </View>);
  }
}
