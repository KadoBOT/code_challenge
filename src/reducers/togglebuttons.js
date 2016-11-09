import _ from 'lodash'

const initialState = [
  { name: 'B1', active: false },
  { name: 'B2', active: false },
]

const togglebuttons = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON': {
      const newState = [...state]

      _.map(newState, (s, i) => {
        if (s.name === action.name) {
          newState[i].active = !newState[i].active
        } else if (s.name !== action.name && s.active) {
          newState[i].active = false
        }
      })

      return newState
    }
    default:
      return state
  }
}

export default togglebuttons
