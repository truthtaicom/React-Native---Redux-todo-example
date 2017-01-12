import { ERROR } from '../constants/actionTypes.const';

export default function (state = '', action) {
  switch (action.type) {
    case ERROR.getDB:
    case ERROR.setDB:
      return action.payload;
    default:
      return state;
  }
}
