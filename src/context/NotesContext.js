import React, { useState } from "react";

const NotesContext = React.createContext()

export const NotesProvider = ( {children} ) => {
    const [Notes, setNotes] = useState([{title:"hi",content:"hello"}, {title:"hi2",content:"hello2"}])

    const addNotes = (title, description) => {
        setNotes([...Notes, {title:title, description:description}])
    }
    
    return (
        <NotesContext.Provider value = {{Notes, addNotes}} >
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;