import React from "react";
import createNotesContext from "./createNotesContext";


const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title:`post #${state.length + 1}`, description:"desc",id : Math.floor(Math.random()*99999)}]
        
        case "DELETE_NOTE":
            return state.filter((Note)=> Note.id !== action.payload)
        case "FETCH_POST":
            return state.filter((Note) => Note.id == action.payload)
        default:
            return state
    }
}

const addNotes = (dispatch) => {
    return () => {
        dispatch({type:"ADD_NOTE"})
    }
}

const deleteNote = (dispatch) => {
    return (id) => {
        dispatch({type:"DELETE_NOTE",payload: id})
    }
}

const fetchNote = (dispatch) => {
    return (id) => {
        dispatch({type:"FETCH_POST", payload:id})
    }
}

export const {Context, Provider} = createNotesContext(
    notesReducer,
    {addNotes, deleteNote, fetchNote },
    []
)