import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../actions/'
import formatPayload from '../helpers/formatPayload'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should toggle checkbox', () => { // toggleCheck
    const name = 'A1'
    const expectedAction = {
      type: actions.TOGGLE_CHECK,
      name,
    }
    expect(actions.toggleCheck(name)).toEqual(expectedAction)
  })
  it('should go to next page', () => { // togglePage
    const expectedAction = {
      type: actions.NEXT_PAGE,
    }
    expect(actions.togglePage()).toEqual(expectedAction)
  })
  it('should click button', () => { // toggleButton
    const name = 'B2'
    const expectedAction = {
      type: actions.TOGGLE_BUTTON,
      name,
    }
    expect(actions.toggleButton(name)).toEqual(expectedAction)
  })
  it('should send text to input', () => { // inputText
    const value = '@abc'
    const expectedAction = {
      type: actions.HANDLE_TEXT,
      value,
    }
    expect(actions.inputText(value)).toEqual(expectedAction)
  })
  it('should select an item', () => { // handleSelect
    const value = 'C2'

    const expectedAction = {
      type: actions.SELECT_ITEM,
      value,
    }
    expect(actions.handleSelect(value)).toEqual(expectedAction)
  })
  it('should handle response', () => { // handleResponse
    const data = []

    const expectedAction = {
      type: actions.HANDLE_SUCCESS,
      data,
    }
    expect(actions.handleResponse(actions.HANDLE_SUCCESS, data)).toEqual(expectedAction)
  })
  describe('should handle input field response', () => { // handleRequest
    const value = '@abc'
    const store = mockStore(value)

    const expectedActions = {
      type: actions.HANDLE_REQUEST,
    }

    it('should fail', () => {
      const newVal = 'abc'
      const newStore = mockStore(value)

      return newStore.dispatch(actions.handleRequest(newVal))
        .catch(() => {
          expect(newStore.getActions()).toEqual([
            expectedActions,
            {
              type: actions.HANDLE_FAILURE,
              data: new Error('Value should start with `@`'),
            },
          ])
        })
    })

    it('should succeed', () =>
      store.dispatch(actions.handleRequest(value))
        .then(() => {
          expect(store.getActions()).toEqual([
            expectedActions,
            {
              type: actions.HANDLE_SUCCESS,
              undefined,
            },
          ])
        }),
    )
  })
  it('should send data', () => { // submitData
    const data = {
      checkboxes: [
        { name: 'A1', completed: false },
        { name: 'A2', completed: true },
      ],
      page: 5,
      selectbox: { options: ['C1', 'C2', 'C3'], selected: 'C2' },
      submitdata: { message: 'Error: BANG! Try again later', success: false, isFetching: false },
      textfield: { value: '@123', success: true, err: '', isFetching: false },
      togglebuttons: [
        { name: 'B1', active: true }, { name: 'B2', active: false },
      ],
    }

    const store = mockStore(data)

    const expectedActions = { type: actions.HANDLE_DATA }

    return store.dispatch(actions.submitData(data))
      .then(() => {
        expect(store.getActions()).toEqual([
          expectedActions,
          {
            type: actions.SUBMIT_SUCCESS,
            data: formatPayload(data),
          },
        ])
      })
      .catch(() => {
        expect(store.getActions()).toEqual([
          expectedActions,
          {
            type: actions.SUBMIT_FAILURE,
            data: new Error('BANG! Try again later'),
          },
        ])
      })
  })
})
