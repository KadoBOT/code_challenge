import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { togglePage } from '../../actions'

let NextButton = ({ disabled, nextPage }) => (
  <button
    disabled={disabled}
    onClick={nextPage}
    style={{ marginLeft: 10 }}
  >
    Next
  </button>
)

const mapDispatchToProps = dispatch => ({
  nextPage: (e) => {
    e.preventDefault()
    dispatch(togglePage())
  },
})

NextButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
}

NextButton = connect(undefined, mapDispatchToProps)(NextButton)


export default NextButton
