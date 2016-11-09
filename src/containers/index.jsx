import React from 'react'
import { connect } from 'react-redux'

import Checkboxes from './Checkboxes/'
import Toggles from './Toggles/'
import TextField from './TextField/'
import SelectBox from './SelectBox/'
import Submit from './Submit/'

const pageNum = {
  1: <Checkboxes />,
  2: <Toggles />,
  3: <TextField />,
  4: <SelectBox />,
  5: <Submit />,
}

let Wrapper = ({ page }) => (
   pageNum[page]
)

const mapStateToProps = state => ({
  page: state.page,
})

Wrapper = connect(mapStateToProps)(Wrapper)

export default Wrapper
