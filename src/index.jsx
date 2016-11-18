import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Redbox from 'redbox-react'
import a11y from 'react-a11y'
import { whyDidYouUpdate } from 'why-did-you-update'
import { AppContainer } from 'react-hot-loader'

import App from './components'
import store from './store'

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
    const AppNext = require('./components').default
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
