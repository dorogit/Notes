import React, {useContext, useState} from "react";
import { View,Text,Button, TextInput } from "react-native"
import NotesContext from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
    const value = useContext(NotesContext)
    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <FlatList
                data={value.Notes}
                renderItem={({item}) => <Text>{item.title} is the title, {item.description} is content</Text>}
                keyExtractor={(item) => item.title}
            />
            <Button title = "add note" onPress={() => value.addNotes()} />
        </View>
    )
}


export default IndexScreen;