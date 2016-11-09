import React, { PropTypes } from 'react'

const style = {
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(199, 79, 9, 0.79)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  },
}

const Loading = ({ isLoading }) => (
  <div style={isLoading ? style.loading : { display: 'none' }}>
    Loading...
  </div>
)

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loading
