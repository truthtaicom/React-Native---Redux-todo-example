import { TODO } from '../constants/actionTypes.const';

export const addTodo = todo => ({
  type: TODO.add,
  payload: todo,
});

export const toggleTodo = todo => ({
  type: TODO.toggle,
  payload: todo,
});
