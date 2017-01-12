import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  addTodo: {
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 250,
  },
  button: {
    height: 40,
    width: 250,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#F26969',
    backgroundColor: '#F26969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    width: 250,
  },
  listItem: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue',
    marginTop: 10,
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
