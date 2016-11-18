const selectbox = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return { ...state, selected: action.value }
    default:
      return state
  }
}

export default selectbox
