const initialState = {
  value: '',
  success: false,
  err: '',
  isFetching: false,
}

const getResponse = (state, action) => {
  switch (action.type) {
    case 'HANDLE_SUCCESS':
      return {
        ...state,
        err: '',
        success: true,
        isFetching: false,
      }
    case 'HANDLE_FAILURE':
      return {
        ...state,
        err: action.data.toString(),
        success: false,
        isFetching: false,
      }
    default:
      return state
  }
}

const apiCall = (state, action) => {
  switch (action.type) {
    case 'HANDLE_REQUEST':
      return { ...state, isFetching: true }
    default:
      return state
  }
}

const input = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_TEXT':
      return {
        ...state,
        err: '',
        success: false,
        value: action.value,
      }
    default:
      return state
  }
}

const textfield = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_TEXT':
      return input(state, action)
    case 'HANDLE_REQUEST':
      return apiCall(state, action)
    case 'HANDLE_FAILURE':
    case 'HANDLE_SUCCESS':
      return getResponse(state, action)
    default:
      return state
  }
}

export default textfield
