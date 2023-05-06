import React, { useContext, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Context } from "../context/NotesContext";
import { Feather } from "@expo/vector-icons";

const NoteScreen = ({ route,navigation }) => {

  const { state } = useContext(Context)
  const { id } = route.params
  const Note = state.find((note) => note.id == id)

  useEffect(()=> {
    navigation.setOptions({
      headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Edit",{ id:id })}>
            <Feather size={18} name="edit" />
          </TouchableOpacity>
        )
    })
  },[])

  return (
    <View>
      <Text>Title is :{Note.title}</Text>
      <Text>Description is: {Note.description}</Text>
    </View>
  );
};

export default NoteScreen;
