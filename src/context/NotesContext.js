import React from "react";
import createNotesContext from "./createNotesContext";


const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title:`post #${state.length + 1}`, description:"desc",id : Math.floor(Math.random()*99999)}]
        default:
            return state
    }
}

const addNotes = (dispatch) => {
    return () => {
        dispatch({type:"ADD_NOTE"})
    }
}

export const {Context, Provider} = createNotesContext(
    notesReducer,
    {addNotes},
    []
)