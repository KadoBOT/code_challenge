const initialState = {
  success: false,
  message: '',
  isFetching: false,
}

const submitdata = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_SUCCESS':
      return { message: 'Data sent successfully', success: true, isFetching: false }
    case 'SUBMIT_FAILURE':
      return { message: action.data.toString(), success: false, isFetching: false }
    case 'HANDLE_DATA':
      return { ...state, isFetching: true }
    default:
      return state
  }
}

export default submitdata
