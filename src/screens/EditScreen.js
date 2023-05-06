import React, { useContext } from "react";
import NotesForm from "../components/NotesForm";
import { Context } from "../context/NotesContext";

const EditScreen = ({ route,navigation }) => {
    const { id } = route.params
    const { state } = useContext(Context)

    const handleSubmit = (title, desc) => {
        const Note = state.find((note) => note.id == id)
        Note.description = desc
        Note.title = title
        navigation.navigate('Home')
    }
   
    return (
        <NotesForm handleSubmit={handleSubmit} />
    );
};

export default EditScreen;
