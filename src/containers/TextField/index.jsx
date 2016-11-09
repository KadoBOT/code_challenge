import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { inputText, handleRequest } from 'actions'
import NextButton from 'commons/NextButton/'
import Loading from 'commons/Loading'

let TextField = ({ onChange, onSubmit, state }) => {
  const handleSubmit = e => onSubmit(state.value, e)

  return (
    <form onSubmit={handleSubmit}>
      <Loading isLoading={state.isFetching} />
      <input
        aria-label="textfield"
        onChange={onChange}
        type="text"
        value={state.value}
      />
      <button type="submit">Check</button>
      <NextButton disabled={!state.success} />
      <br />
      <span style={{ color: 'red' }}>{state.err}</span>
    </form>
  )
}

const mapStateToProps = state => ({
  state: state.textfield,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    dispatch(inputText(e.target.value))
  },
  onSubmit: (value, e) => {
    e.preventDefault()
    dispatch(handleRequest(value))
  },
})

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    value: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    err: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
}

TextField = connect(mapStateToProps, mapDispatchToProps)(TextField)

export default TextField
