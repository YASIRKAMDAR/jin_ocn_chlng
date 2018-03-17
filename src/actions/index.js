import { UPDATEPRESSTATE, GETPAGE } from './types'

export const getLocalState = (prevState, pageIndex = 1) => {
    let storedValue = [];
    let storedSelection = [];
    try {    
        // Make sure localstorage is available if not use local store state
        storedValue = !localStorage.getItem("stored_value") ? prevState.storedValue : JSON.parse(localStorage.getItem("stored_value"));
        storedSelection = !localStorage.getItem("stored_selection") ? prevState.storedSelection : JSON.parse(localStorage.getItem("stored_selection"));
    }
    catch(err) {
        console.log(err);
    }
    return {
        storedValue: storedValue,
        storedSelection: storedSelection,
        pageIndex: pageIndex,
        count: storedValue.length > storedSelection.length ? storedValue.length: storedSelection.length
    }
  };

export const updatePresState = (prevState, data) => {
    let storedValue = [];
    let storedSelection = [];
    try {
        // Make sure localstorage is available if not use local store state
        storedValue = !localStorage.getItem("stored_value") ? prevState.storedValue : JSON.parse(localStorage.getItem("stored_value"));
        storedSelection = !localStorage.getItem("stored_selection") ? prevState.storedSelection : JSON.parse(localStorage.getItem("stored_selection"));
        storedValue.push(data.textArea);
        storedSelection.push(data.multiSelect);
        localStorage.setItem("stored_value",JSON.stringify(storedValue));
        localStorage.setItem("stored_selection",JSON.stringify(storedSelection));
    } catch (error) {
        console.log(error)   
    }
    var updatedState = {
        storedValue: storedValue,
        storedSelection: storedSelection,
        count: storedValue.length > storedSelection.length ? storedValue.length: storedSelection.length
    }
    return function(dispatch) {
        dispatch({ type: UPDATEPRESSTATE, payload: updatedState});
    }
};

export const getPage = (prevState, pageId) => {
    return function(dispatch) {
        dispatch({ type: GETPAGE, payload: getLocalState(prevState, pageId)});
    }
}