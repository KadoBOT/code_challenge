const initialState = {
  options: ['C1', 'C2', 'C3'],
  selected: 'none',
}

const selectbox = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return { ...state, selected: action.value }
    default:
      return state
  }
}

export default selectbox
