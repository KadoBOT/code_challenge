import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Main from './Main'

function mapStateToProps(state) {
  return {
    checkboxes: state.checkboxes,
    page: state.page,
    selectbox: state.selectbox,
    submitdata: state.submitdata,
    textfield: state.textfield,
    togglebuttons: state.togglebuttons,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
