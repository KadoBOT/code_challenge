import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { toggleCheck } from 'actions'
import Checkbox from 'components/Checkbox'
import NextButton from 'commons/NextButton'

let Checkboxes = ({ checkboxes, checkInput }) => (
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

const mapStateToProps = state => ({
  checkboxes: state.checkboxes,
})

const mapDispatchToProps = dispatch => ({
  checkInput: (e) => {
    dispatch(toggleCheck(e.target.name))
  },
})

Checkboxes.propTypes = {
  checkInput: PropTypes.func.isRequired,
  checkboxes: PropTypes.array.isRequired,
}

Checkboxes = connect(mapStateToProps, mapDispatchToProps)(Checkboxes)

export default Checkboxes
