import React, {useContext} from "react";
import { View,Text,Button, StyleSheet } from "react-native"
import NotesContext from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
const IndexScreen = () => {
    const value = useContext(NotesContext)
    return (
        <View>
            <Button title = "add note" onPress={() => value.addNotes()} />
            <FlatList
                data={value.Notes}
                renderItem={({item}) => (
                    <View style = {styles.view}>
                        <Text style={styles.title}>{item.title} is the title, {item.description} is content and {item.id} is the id</Text>
                        <Feather style={styles.icon} name="trash" />
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default IndexScreen;