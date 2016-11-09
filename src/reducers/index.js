import { combineReducers } from 'redux'

import page from './nextpage'
import checkboxes from './checkboxes'
import togglebuttons from './togglebuttons'
import textfield from './textfield'
import selectbox from './selectbox'
import submitdata from './submitdata'

const reducer = combineReducers({
  checkboxes,
  page,
  togglebuttons,
  textfield,
  selectbox,
  submitdata,
})

export default reducer
