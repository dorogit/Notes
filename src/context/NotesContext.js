import createNotesContext from "./createNotesContext";
import jsonServer from "../api/jsonServer";

const notesReducer =  (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const id = Math.floor(Math.random(0,1)*99999)
            jsonServer.post('/Notes', {title:action.payload.title,description:action.payload.desc, id: id})
            return [...state, {title: action.payload.title, description: action.payload.desc,id : id}]
        
        case "DELETE_NOTE":
            return state.filter((Note)=> Note.id !== action.payload)
        case "EDIT_NOTE":
            return state.map((note)=> {
                return note.id === action.payload.id ? action.payload: note
            })
        case "GET_NOTES":
            return action.payload
        default:
            return state
    }
}

const getNotes = (dispatch) => {
    return async () => {
        response = await jsonServer.get('/Notes')
        dispatch({type:"GET_NOTES", payload:response.data})
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
        jsonServer.delete(`/Notes/${id}`)
        dispatch({type:"DELETE_NOTE",payload: id})
    }
}

const editNote = (dispatch) => {
    return async (id, title, description, callback) => {
        console.log(id)
        await jsonServer.put(`/Notes/${id}`, {title, description,id})
        dispatch({type:"EDIT_NOTE", payload:{title:title, description:description, id:id}})
        callback()
    }
}

export const {Context, Provider} = createNotesContext(
    notesReducer,
    { addNote, deleteNote, editNote, getNotes },
    [{title:"This is a dummy title", description:"this is a dummy descrption", id:10000}]
)