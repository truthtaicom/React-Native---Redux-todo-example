import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers/index';

export default function configStore(initalState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    initalState,
    composeEnhancers(
      applyMiddleware(reduxImmutableStateInvariant())
    )
  );
}
