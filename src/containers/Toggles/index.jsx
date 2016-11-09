import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Toggle from 'components/Toggle'
import NextButton from 'commons/NextButton/'
import { toggleButton } from 'actions'

let ToggleButton = ({ togglebuttons, onClick }) => (
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

const mapStateToProps = state => ({
  togglebuttons: state.togglebuttons,
})

const mapDispatchToProps = dispatch => ({
  onClick: (e) => {
    dispatch(toggleButton(e.target.name))
  },
})

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  togglebuttons: PropTypes.array.isRequired,
}

ToggleButton = connect(mapStateToProps, mapDispatchToProps)(ToggleButton)

export default ToggleButton
