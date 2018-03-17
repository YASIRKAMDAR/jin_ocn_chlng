import reducer from './presStateReducer';
import * as types from '../actions/types';
import * as actions from '../actions/index';
import expect from 'expect';

describe('presState reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []});
    });

    it('should handle GETPAGE', () => {
        const getPageAction = {
          type: types.GETPAGE,
          payload: actions.getLocalState({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []}, 1)
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []}, getPageAction)).toEqual({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []});
    });
    it('should handle UPDATEPRESSTATE', () => {
        const getPageAction = {
          type: types.UPDATEPRESSTATE,
          payload: actions.getLocalState({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []}, 1)
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []}, getPageAction)).toEqual({"count": 0, "pageIndex": 1, "storedSelection": [], "storedValue": []});
    });

});