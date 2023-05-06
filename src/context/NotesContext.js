import React from "react";
import createNotesContext from "./createNotesContext";


const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {title: action.payload.title, description: action.payload.desc,id : Math.floor(Math.random()*99999)}]
        
        case "DELETE_NOTE":
            return state.filter((Note)=> Note.id !== action.payload)
        case "EDIT_NOTE":
            return state.map((note)=> {
                return note.id === action.payload.id ? action.payload: note
            })
        default:
            return state
    }
}

const addNote = (dispatch) => {
    return (title, desc,callback) => {
        dispatch({type:"ADD_NOTE",payload: {title: title, desc: desc}})
        callback()
    }
}

const deleteNote = (dispatch) => {
    return (id) => {
        dispatch({type:"DELETE_NOTE",payload: id})
    }
}

const editNote = (dispatch) => {
    return (id, title, desc, callback) => {
        dispatch({type:"EDIT_NOTE", payload:{title:title, description:desc, id:id}})
        callback()
    }
}

export const {Context, Provider} = createNotesContext(
    notesReducer,
    {addNote, deleteNote,editNote },
    [{title:"This is a dummy title", description:"this is a dummy descrption", id:10000}]
)