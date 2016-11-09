import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { handleSelect, togglePage } from 'actions'
import NextButton from 'commons/NextButton'

let SelectBox = ({ onChange, state }) => (
  <div>
    <select
      defaultValue={state.selected}
      onChange={onChange}
    >
      <option
        aria-label="none"
        disabled
        value="none"
      />
      {state.options.map(o =>
        <option
          aria-label={o}
          key={o}
          value={o}
        >
          {o}
        </option>,
      )}
    </select>
    <NextButton disabled={state.selected === 'none'} />
  </div>
)

const mapStateToProps = state => ({
  state: state.selectbox,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    dispatch(handleSelect(e.target.value))
  },
  nextPage: () => {
    dispatch(togglePage())
  },
})

SelectBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
}

SelectBox = connect(mapStateToProps, mapDispatchToProps)(SelectBox)

export default SelectBox
