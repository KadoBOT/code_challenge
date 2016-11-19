import { fromJS } from 'immutable'
import _ from 'lodash'

import store from '../store'
import reducer from '../reducers'

describe('Main Reducer', () => {
  const defaultState = store.getState()
  const reducers = obj => reducer(store.getState(), obj)

  it('should fire action TOGGLE_CHECK', () => { // checkboxes
    const name = 'A1'

    expect(reducers({
      type: 'TOGGLE_CHECK',
      name,
    })).toEqual({
      ...defaultState,
      checkboxes: defaultState.checkboxes.map((c) => {
        if (c.name !== name) {
          return { ...c }
        }
        return { ...c, completed: !c.completed }
      }),
    })
  })

  it('should fire action NEXT_PAGE', () => { // nextpage
    expect(reducers({
      type: 'NEXT_PAGE',
    })).toEqual({ ...defaultState, page: defaultState.page + 1 })
  })

  it('should fire action SELECT_ITEM', () => { // selectbox
    const value = 'C2'

    expect(reducers({
      type: 'SELECT_ITEM',
      value,
    })).toEqual({
      ...defaultState,
      selectbox: { ...defaultState.selectbox, selected: value },
    })
  })

  describe('should submit the data', () => { // submitdata
    it('should fire action SUBMIT_SUCCESS', () => {
      expect(reducers({
        type: 'SUBMIT_SUCCESS',
      })).toEqual({
        ...defaultState,
        submitdata: { ...defaultState.submitdata, message: 'Data sent successfully', success: true },
      })
    })
    it('should fire action SUBMIT_FAILURE', () => {
      expect(reducers({
        type: 'SUBMIT_FAILURE',
        data: new Error('Failed to Submit Data'),
      })).toEqual({
        ...defaultState,
        submitdata: { ...defaultState.submitdata, message: 'Error: Failed to Submit Data', success: false },
      })
    })
    it('should fire action HANDLE_DATA', () => {
      expect(reducers({
        type: 'HANDLE_DATA',
      })).toEqual({
        ...defaultState,
        submitdata: { ...defaultState.submitdata, isFetching: true },
      })
    })
  })

  describe('should handle text input', () => { // textfield
    it('should fire action HANDLE_TEXT', () => {
      const value = '@ABC'

      expect(reducers({
        type: 'HANDLE_TEXT',
        value,
      })).toEqual({
        ...defaultState,
        textfield: { ...defaultState.textfield, value },
      })
    })
    it('should fire action HANDLE_REQUEST', () => {
      expect(reducers({
        type: 'HANDLE_REQUEST',
      })).toEqual({
        ...defaultState,
        textfield: { ...defaultState.textfield, isFetching: true },
      })
    })
    it('should fire action HANDLE_SUCCESS', () => {
      expect(reducers({
        type: 'HANDLE_SUCCESS',
      })).toEqual({
        ...defaultState,
        textfield: { ...defaultState.textfield, success: true },
      })
    })
    it('should fire action HANDLE_FAILURE', () => {
      expect(reducers({
        type: 'HANDLE_FAILURE',
        data: new Error('Failed to fetch data'),
      })).toEqual({
        ...defaultState,
        textfield: { ...defaultState.textfield, err: 'Error: Failed to fetch data' },
      })
    })
  })

  it('should fire action TOGGLE_BUTTON', () => {
    const name = 'B1'

    expect(reducers({
      type: 'TOGGLE_BUTTON',
      name,
    })).toEqual({
      ...defaultState,
      togglebuttons: defaultState.togglebuttons.map((t) => {
        if (t.name === name) {
          return { ...t, active: true }
        }
        return { ...t }
      }),
    })
  })
})
