import formatPayload from 'helpers/formatPayload'
import { checkIt, submitIt } from '../api'

export const TOGGLE_CHECK = 'TOGGLE_CHECK'
export const NEXT_PAGE = 'NEXT_PAGE'
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON'
export const HANDLE_TEXT = 'HANDLE_TEXT'
export const HANDLE_REQUEST = 'HANDLE_REQUEST'
export const SELECT_ITEM = 'SELECT_ITEM'
export const HANDLE_DATA = 'HANDLE_DATA'

// /////////////////// //
// Redux actions used  //
// /////////////////// //

// Checkboxes Component: handle input checkbox action
export const toggleCheck = name => ({
  type: TOGGLE_CHECK,
  name,
})

// NextButton Component: handle page change action
export const togglePage = () => ({
  type: NEXT_PAGE,
})

// Toggles Component: handle button toggle action
export const toggleButton = name => ({
  type: TOGGLE_BUTTON,
  name,
})

// TextField Component: handle value inside text input
export const inputText = value => ({
  type: HANDLE_TEXT,
  value,
})

// Handle API responses from both textfield check and submit button
export const handleResponse = (type, data) => ({
  type,
  data,
})

// Handle the loading of the text input api promise
export const submitForm = () => ({
  type: HANDLE_REQUEST,
})

// Handle the loading and the response from the text input api
export const handleRequest = value => (dispatch) => {
  dispatch(submitForm())

  return checkIt(value)
  .then(res => dispatch(handleResponse('HANDLE_SUCCESS', res)))
  .catch(err => dispatch(handleResponse('HANDLE_FAILURE', err)))
}

// Select Box Component: handle the item selected
export const handleSelect = value => ({
  type: SELECT_ITEM,
  value,
})

// Handle the loading of the submit api promise
export const submitAll = () => ({
  type: HANDLE_DATA,
})

// Handle the loading and the response from the submit api
export const submitData = payload => (dispatch) => {
  dispatch(submitAll())

  return submitIt(formatPayload(payload))
  .then((res) => {
    dispatch(handleResponse('SUBMIT_SUCCESS', res))
  })
  .catch((err) => {
    dispatch(handleResponse('SUBMIT_FAILURE', err))
  })
}
