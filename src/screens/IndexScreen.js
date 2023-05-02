import React, {useContext, useState} from "react";
import { View,Text,Button, StyleSheet } from "react-native"
import { Context } from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
    const value = useContext(Context)
    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <FlatList
                data={value.state}
                renderItem={({item}) => (
                    <View style = {styles.viewStyle}>
                        <Text style = {styles.textStyle}>{item.title} is the title, {item.description} is content</Text>
                        <Feather style={styles.iconStyle} name="trash" />
                    </View>
                )}
                keyExtractor={(item) => item.title}
            />
            <Button title = "add note" onPress={() => value.addNotes()} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default IndexScreen;