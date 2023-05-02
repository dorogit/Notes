<<<<<<< HEAD
import React, {useContext} from "react";
import { View,Text,Button, StyleSheet } from "react-native"
import NotesContext from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
=======
import React, {useContext, useState} from "react";
import { View,Text,Button, StyleSheet } from "react-native"
import { Context } from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

>>>>>>> 87671ed7c28da5ae05beac9596f644b9301bb430
const IndexScreen = () => {
    const value = useContext(NotesContext)
    return (
        <View>
            <Button title = "add note" onPress={() => value.addNotes()} />
            <FlatList
<<<<<<< HEAD
                data={value.Notes}
                renderItem={({item}) => (
                    <View style = {styles.view}>
                        <Text style={styles.title}>{item.title} is the title, {item.description} is content and {item.id} is the id</Text>
                        <Feather style={styles.icon} name="trash" />
                    </View>
                )}
                keyExtractor={(item) => item.id}
=======
                data={value.state}
                renderItem={({item}) => (
                    <View style = {styles.viewStyle}>
                        <Text style = {styles.textStyle}>{item.title} is the title, {item.description} is content</Text>
                        <Feather style={styles.iconStyle} name="trash" />
                    </View>
                )}
                keyExtractor={(item) => item.title}
>>>>>>> 87671ed7c28da5ae05beac9596f644b9301bb430
            />
        </View>
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    view:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"gray"
    },
    title: {
        fontSize:16
    },
    icon: {
        fontSize:24
=======
    viewStyle: {
        justifyContent:"space-around",
        flexDirection:"row",
        paddingVertical:20,
        paddingHorizontal:10,
        borderWidth:2,
        borderColor:"gray"
    },
    iconStyle: {
        fontSize:18
    },
    textStyle: {
        fontSize:18
>>>>>>> 87671ed7c28da5ae05beac9596f644b9301bb430
    }
})

export default IndexScreen;