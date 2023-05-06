import React, { useContext, useState } from "react";
import { Context } from "../context/NotesContext";
import NotesForm from "../components/NotesForm";

const CreateScreen = ({ navigation }) =>{
    const { addNote } = useContext(Context)

    return (
        <NotesForm handleSubmit={(title, desc) => {
            addNote(title, desc, ()=> navigation.navigate('Home'))
        }} />
    );
};

export default CreateScreen;
