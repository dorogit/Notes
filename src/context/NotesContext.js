import React from "react";
import createNotesContext from "./createNotesContext";


const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title: action.payload.title, description: action.payload.desc,id : Math.floor(Math.random()*99999)}]
        
        case "DELETE_NOTE":
            return state.filter((Note)=> Note.id !== action.payload)
        default:
            return state
    }
}

const addNote = (dispatch) => {
    return (title, desc) => {
        dispatch({type:"ADD_NOTE",payload: {title: title, desc: desc}})
    }
}

const deleteNote = (dispatch) => {
    return (id) => {
        dispatch({type:"DELETE_NOTE",payload: id})
    }
}

export const {Context, Provider} = createNotesContext(
    notesReducer,
    {addNote, deleteNote },
    [{title:"This is a dummy title", description:"this is a dummy descrption", id:10000}]
)