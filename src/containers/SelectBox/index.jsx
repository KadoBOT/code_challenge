import React, { PropTypes } from 'react'
import NextButton from 'commons/NextButton'

const SelectBox = ({ handleSelect, selectbox }) => {
  const onChange = (e) => {
    handleSelect(e.target.value)
  }

  return (
    <div>
      <select
        defaultValue={selectbox.selected}
        onChange={onChange}
      >
        <option
          aria-label="none"
          disabled
          value="none"
        />
        {selectbox.options.map(o =>
          <option
            aria-label={o}
            key={o}
            value={o}
          >
            {o}
          </option>,
        )}
      </select>
      <NextButton disabled={selectbox.selected === 'none'} />
    </div>
  )
}

SelectBox.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  selectbox: PropTypes.shape({
    selected: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
}

export default SelectBox
