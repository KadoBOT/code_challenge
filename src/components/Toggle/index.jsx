import React, { PropTypes } from 'react'

const style = {
  active: {
    true: {
      width: '100px',
      outline: 'none',
      backgroundColor: 'transparent',
      border: '2px solid green',
      borderRadius: '5px',
    },
    false: {
      width: '100px',
      outline: 'none',
      backgroundColor: 'transparent',
      border: '1px solid #c5c5c5',
      color: '#c5c5c5',
      borderRadius: '5px',
    },
  },
}

const Toggle = ({ active, onClick, name }) =>
  <button
    name={name}
    onClick={onClick}
    style={style.active[active]}
  >
    {name}
  </button>

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Toggle
