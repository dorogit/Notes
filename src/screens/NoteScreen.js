import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context } from "../context/NotesContext";

const NoteScreen = ({ route }) => {

  const { state } = useContext(Context)
  const { id } = route.params

  const Note = state.find((note) => note.id == id)

  return (
    <View>
      <Text>Title is :{Note.title}</Text>
      <Text>Description is: {Note.description}</Text>
    </View>
  );
};

export default NoteScreen;
