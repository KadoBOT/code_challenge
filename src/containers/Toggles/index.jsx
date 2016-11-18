import React, { PropTypes } from 'react'
import _ from 'lodash'

import Toggle from 'components/Toggle'
import NextButton from 'commons/NextButton/'

const ToggleButton = ({ togglebuttons, toggleButton }) => {
  const onClick = e => toggleButton(e.target.name)

  return (
    <div>
      {togglebuttons.map(t =>
        <Toggle
          active={t.active}
          key={t.name}
          name={t.name}
          onClick={onClick}
        />,
      )}
      <NextButton disabled={!_.includes(togglebuttons, _.find(togglebuttons, { active: true }))} />
    </div>
  )
}

ToggleButton.propTypes = {
  toggleButton: PropTypes.func.isRequired,
  togglebuttons: PropTypes.array.isRequired,
}


export default ToggleButton
