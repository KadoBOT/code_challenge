import React from 'react'

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

const Wrapper = (props) => (
   <div>
     { React.cloneElement(pageNum[props.page], props) }
   </div>
)

export default Wrapper
