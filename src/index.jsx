import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import a11y from 'react-a11y'
import { whyDidYouUpdate } from 'why-did-you-update'

import App from 'components'
import reducer from 'reducers'

const store = applyMiddleware(thunk)(createStore)(reducer)

const consoleErrorReporter = ({ error }) => {
  console.error(error)
  return <Redbox error={error} />
}

if (process.env.NODE_ENV === 'development') {
  a11y(React)
  whyDidYouUpdate(React)
}

consoleErrorReporter.propTypes = {
  error: React.PropTypes.error,
}

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app'),
)

if (module.hot) {
  module.hot.accept('./components/', () => {
    const AppNext = require('components').defaul
    render(
      <AppContainer>
        <Provider store={store}>
          <AppNext />
        </Provider>
      </AppContainer>,
      document.getElementById('app'),
    )
  })
}
