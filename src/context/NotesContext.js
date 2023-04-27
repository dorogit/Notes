import React from "react";
import createDataContext from "./createDataContext";

const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title:`post #${state.length + 1}`, description:"desc",id : Math.floor(Math.random()*99999)}]
        default:
            return state
    }
}

export const NotesProvider = ( {children} ) => {
    const [Notes, dispatch] = useReducer(notesReducer, [{title:"balls", description:"balls2"}])

    const addNotes = () => {
        dispatch({type:"ADD_NOTE"})
    }
}

export const {Context, Provider} = createDataContext(
    notesReducer,
    {addNotes},
    []
)