import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { submitData } from 'actions'
import Loading from 'commons/Loading'
import formatPayload from 'helpers/formatPayload'

let Submit = ({ onClick, state }) => {
  const submit = e => onClick(state, e)

  return (
    <div>
      <Loading isLoading={state.submitdata.isFetching} />
      <button onClick={submit}>Submit</button>
      {state.submitdata.message && <pre>{JSON.stringify(state.submitdata.message)} at {new Date().toUTCString()}</pre>}
      <br />
      {state.submitdata.message && <pre>Payload:<br/>{JSON.stringify(formatPayload(state), null, ' ')}</pre>}
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = dispatch => ({
  onClick: (payload, e) => {
    e.preventDefault()
    dispatch(submitData(payload))
  },
})

Submit.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.shape({
    submitData: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      message: PropTypes.string.isRequired,
    }),
  }),
}

Submit = connect(mapStateToProps, mapDispatchToProps)(Submit)

export default Submit
