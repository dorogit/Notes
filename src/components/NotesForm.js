import React from "react";
import { View, Text,TextInput,StyleSheet,Button } from "react-native";
import { useState } from "react";

const NotesForm = ( { handleSubmit, initialValues } ) =>{
    const [title, setTitle] = useState(initialValues.title)
    const [desc,setDesc] = useState(initialValues.desc)

    return (
    <View style={style.viewStyle}>
        <Text style={style.textStyle}>Enter Title:</Text>
        <TextInput value={title} onChangeText = {(text) => setTitle(text)} style={style.inputStyle} />
        <Text style={style.textStyle}>Enter Description:</Text>
        <TextInput value={desc} onChangeText={(text) => setDesc(text)} style={style.inputStyle} />
        <Button onPress={() => handleSubmit(title,desc)} style={style.buttonStyle} title="Submit" />
    </View>
    );
};

NotesForm.defaultProps = {
    initialValues: {
        title:"Dummy Title",
        desc:"Dummy Description"
    }
}

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

export default NotesForm;
