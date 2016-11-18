import _ from 'lodash'

const togglebuttons = (state = [], action) => {
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
