import { createSelector } from 'reselect';

const todos = state => state.todos;

export const getVisibleTodos = createSelector(
  todos,

);
