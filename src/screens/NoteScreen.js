import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context } from "../context/NotesContext";

const NoteScreen = ({ route }) => {
  const { id } = route.params;
  const { fetchNote } = useContext(Context);
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchedNote = fetchNote(id);
    setNote(fetchedNote);
  }, []);

  if (!note) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{note.description}</Text>
    </View>
  );
};

export default NoteScreen;
