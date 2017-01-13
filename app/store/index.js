import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers/index';

export default function configStore(initalState) {
  return createStore(
    reducers,
    initalState,
    composeWithDevTools(
      applyMiddleware(reduxImmutableStateInvariant())
    )
  );
}
