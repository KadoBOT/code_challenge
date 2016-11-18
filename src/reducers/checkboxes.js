const checkbox = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECK':
      if (state.name !== action.name) {
        return state
      }

      return { ...state, completed: !state.completed }
    default:
      return state
  }
}

const checkboxes = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_CHECK':
      return state.map(c => checkbox(c, action))
    default:
      return state
  }
}

export default checkboxes
