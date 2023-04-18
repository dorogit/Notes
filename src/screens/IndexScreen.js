import React, {useContext, useState} from "react";
import { View,Text, TextInput } from "react-native"
import NotesContext from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
    const [title, setTitle] = useState("")
    const [desc,setDesc] = useState("")
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
            <TextInput
                value={title}
                onChangeText = {(text) => setTitle(text)}
            />
            <TextInput
                value = {desc}
                onChangeText = {(text) => setDesc(text)}
                onSubmitEditing={() => value.addNotes(title, desc)}
            />
        </View>
    )
}


export default IndexScreen;