import { UPDATEPRESSTATE, GETPAGE } from '../actions/types'

const getInitialState = () => {
    let storedValue = [];
    let storedSelection = [];
    try {
        storedValue = !localStorage.getItem("stored_value") ? [] : JSON.parse(localStorage.getItem("stored_value"));
        storedSelection = !localStorage.getItem("stored_selection") ? [] : JSON.parse(localStorage.getItem("stored_selection"));
    }
    catch(err) {
        // throw new Error("localStorage not supported by device!");
        console.log(err);
    }
    return {
        storedValue: storedValue,
        storedSelection: storedSelection,
        pageIndex: 1,
        count: storedValue.length > storedSelection.length ? storedValue.length: storedSelection.length
    }
};
var initialState = getInitialState();

export default function(state = initialState, action) {
    switch(action.type) {
      case UPDATEPRESSTATE:
        return Object.assign({}, state, {
          storedValue: action.payload.storedValue,
          storedSelection: action.payload.storedSelection,
          count: action.payload.count,
       });
      case GETPAGE:
        return Object.assign({}, state, {
          storedValue: action.payload.storedValue,
          storedSelection: action.payload.storedSelection,
          pageIndex: action.payload.pageIndex,
          count: action.payload.count,
       });
      default:
          return state;
    }
}
