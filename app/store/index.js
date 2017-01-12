import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
// import { createEpicMiddleware } from 'redux-observable';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers/index';
// import epics from '../epics/index'

export default function configStore(initalState) {
  // const epicMiddleware = createEpicMiddleware(epics)
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 });

  return createStore(
    reducers,
    initalState,
    composeEnhancers(
      applyMiddleware(reduxImmutableStateInvariant())
    )
  );
}
