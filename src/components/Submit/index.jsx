import React, { PropTypes } from 'react'

import Loading from '../../commons/Loading'
import formatPayload from '../../helpers/formatPayload'

const Submit = (props) => {
  const { submitdata, submitData } = props
  const onClick = (e) => {
    e.preventDefault()
    submitData(props)
  }

  return (
    <div>
      <Loading isLoading={submitdata.isFetching} />
      <button onClick={onClick}>Submit</button>
      {submitdata.message && <pre>{JSON.stringify(submitdata.message)} at {new Date().toUTCString()}</pre>}
      <br />
      {submitdata.message && <pre>Payload:<br/>{JSON.stringify(formatPayload(props), null, ' ')}</pre>}
    </div>
  )
}

Submit.propTypes = {
  submitData: PropTypes.func.isRequired,
  submitdata: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  }),
}


export default Submit
