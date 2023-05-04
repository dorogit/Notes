import React, { useContext, useState } from "react";
import { View, Text,TextInput,StyleSheet,Button } from "react-native";
import { Context } from "../context/NotesContext";

const CreateScreen = ({ navigation }) =>{
    const { addNote } = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc,setDesc] = useState('')

    const handleSubmit = (title, desc) => {
        addNote(title, desc)
        navigation.navigate('Home')
    }

    return (
    <View style={style.viewStyle}>
        <Text style={style.textStyle}>Enter Title:</Text>
        <TextInput onChangeText = {(text) => setTitle(text)} style={style.inputStyle} />
        <Text style={style.textStyle}>Enter Description:</Text>
        <TextInput onChangeText={(text) => setDesc(text)} style={style.inputStyle} />
        <Button onPress={() => handleSubmit(title,desc)} style={style.buttonStyle} title="Submit" />
    </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        paddingHorizontal:10,
    },
    textStyle: {
        fontSize:18,
        marginTop:30
    },
    inputStyle: {
        borderWidth:1,
        marginTop:10
    },
    buttonStyle: {
        marginTop:20
    }
})

export default CreateScreen;
