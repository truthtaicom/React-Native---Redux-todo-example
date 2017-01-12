import { connect } from 'react-redux';

import Root from '../components/Root';

const mapStateToProps = state => ({
  error: state.errors,
  message: state.storage,
});


export default connect(
  mapStateToProps
)(Root);
