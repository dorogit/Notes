import React, { useContext } from "react";
import NotesForm from "../components/NotesForm";
import { Context } from "../context/NotesContext";

const EditScreen = ({ route,navigation }) => {
    const { id } = route.params
    const { editNote } = useContext(Context)
    const handleSubmit = (title, desc) => {
        editNote(id, title, desc,() => navigation.navigate('Home'))
    }
   
    return (
        <NotesForm handleSubmit={handleSubmit} />
    );
};

export default EditScreen;
