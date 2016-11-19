import React, { PropTypes } from 'react'

const Checkbox = ({ checked, name, onClick }) => (
  <label htmlFor={name}>
    <input
      aria-label={name}
      checked={checked}
      id={name}
      name={name}
      onClick={onClick}
      type="checkbox"
    />
    {name}
  </label>
)

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Checkbox
