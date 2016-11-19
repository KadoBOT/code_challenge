import React, { PropTypes } from 'react'
import _ from 'lodash'

import Checkbox from './Checkbox'
import NextButton from '../../commons/NextButton'

const Checkboxes = ({ checkboxes, toggleCheck }) => {
  const checkInput = (e) => {
    toggleCheck(e.target.name)
  }

  return (
    <div>
      {_.map(checkboxes, c =>
        <Checkbox
          checked={c.completed}
          key={c.name}
          name={c.name}
          onClick={checkInput}
        />,
      )}
      <NextButton disabled={!_.includes(checkboxes, _.find(checkboxes, { completed: true }))} />
    </div>
  )
}

Checkboxes.propTypes = {
  checkboxes: PropTypes.array.isRequired,
  toggleCheck: PropTypes.func.isRequired,
}

export default Checkboxes
