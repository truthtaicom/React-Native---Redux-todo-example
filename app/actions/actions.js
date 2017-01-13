import { TODO, ERROR } from '../constants/actionTypes.const';

export const addTodo = (todo) => {
  if (todo === '') {
    return {
      type: ERROR.empty,
    };
  }

  return {
    type: TODO.add,
    payload: {
      name: todo,
      completed: false,
    },
  };
};

export const toggleTodo = todo => ({
  type: TODO.toggle,
  payload: todo,
});

export const removeError = () => ({
  type: ERROR.remove,
});
