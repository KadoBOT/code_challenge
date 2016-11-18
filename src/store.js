import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'
import checkboxes from './data/checkboxes'
import selectbox from './data/selectbox'
import submitdata from './data/submitdata'
import textfield from './data/textfield'
import togglebuttons from './data/togglebuttons'

const defaultState = {
  checkboxes,
  selectbox,
  submitdata,
  textfield,
  togglebuttons,
}

const devTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

const store = applyMiddleware(thunk)(createStore)(rootReducer, defaultState, devTools)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
