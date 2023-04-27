import React from "react";
import createDataContext from "./createDataContext";

const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title:`post #${state.length + 1}`, description:"desc"}]
        default:
            return state
    }
}

const addNotes = (dispatch) => {
    return () => {
        dispatch({type:"ADD_NOTE"})
    }
}

export const {Context, Provider} = createDataContext(
    notesReducer,
    {addNotes},
    []
)