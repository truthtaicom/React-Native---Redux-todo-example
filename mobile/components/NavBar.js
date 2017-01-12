import React, { PureComponent, PropTypes } from 'react';
import { Text, Picker } from 'react-native';
import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'NavBar'

  static propTypes = {
    visible: PropTypes.string,
    changeVisible: PropTypes.func,
  }

  changeVisible = name => this.props.changeVisible(name)

  render() {
    return (<Picker
      selectedValue={this.props.visible}
      onValueChange={this.changeVisible}
      style={styles.navBar}
    >
      <Picker.Item label="All" value="all" />
      <Picker.Item label="Completed" value="completed" />
      <Picker.Item label="Active" value="active" />
    </Picker>);
  }
}
