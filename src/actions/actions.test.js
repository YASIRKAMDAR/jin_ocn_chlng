import * as types from './types';
import { getPage, updatePresState } from './index';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
 
it('should dispatch action getPage', () => {
 
  // Initialize mockstore with empty state
  const initialState = {count: 0, pageIndex: 1, storedSelection: [], storedValue: []}
  const store = mockStore(initialState)
 
  // Dispatch the action
  store.dispatch(getPage(initialState,1))
 
  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload =  { payload: {"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue":  [] }, type: 'get_page' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch action updatePresState', () => {
 
  // Initialize mockstore with empty state
  const initialState = {"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []}
  const store = mockStore(initialState)
 
  // Dispatch the action
  store.dispatch(updatePresState(initialState, {textArea: "test",multiSelect: ["one"]} ))
 
  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { payload: {"count": 1, "storedSelection": [["one"]], "storedValue":  ["test"] }, type: 'update_pres_state' }
  expect(actions).toEqual([expectedPayload])
})
