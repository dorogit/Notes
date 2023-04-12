import React from "react";

const NotesContext = React.createContext

const NotesProvider = ( {children} ) => {
    return (
        <NotesContext.Provider>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider;