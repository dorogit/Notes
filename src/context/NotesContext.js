import React, { useReducer } from "react";

const NotesContext = React.createContext()

const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title:`post #${state.length + 1}`, description:"desc",id : Math.floor(Math.random()*99999)}]
        default:
            return state
    }
}

export const NotesProvider = ( {children} ) => {
    const [Notes, dispatch] = useReducer(notesReducer, [{title:"Note title", description:"Testing"}])

    const addNotes = () => {
        dispatch({type:"ADD_NOTE"})
    }
    
    return (
        <NotesContext.Provider value = {{Notes, addNotes}} >
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;