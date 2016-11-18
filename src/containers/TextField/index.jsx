import React, { PropTypes } from 'react'

import NextButton from 'commons/NextButton/'
import Loading from 'commons/Loading'

const TextField = ({ inputText, handleRequest, textfield }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleRequest(textfield.value)
  }
  const onChange = e => inputText(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <Loading isLoading={textfield.isFetching} />
      <input
        aria-label="textfield"
        onChange={onChange}
        type="text"
        value={textfield.value}
      />
      <button type="submit">Check</button>
      <NextButton disabled={!textfield.success} />
      <br />
      <span style={{ color: 'red' }}>{textfield.err}</span>
    </form>
  )
}

TextField.propTypes = {
  handleRequest: PropTypes.func.isRequired,
  inputText: PropTypes.func.isRequired,
  textfield: PropTypes.shape({
    value: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    err: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
}

export default TextField
