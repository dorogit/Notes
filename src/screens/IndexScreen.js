import React, {useContext} from "react";
import { View,Text,Button, StyleSheet } from "react-native"
import { Context } from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
    const {state, addNotes} = useContext(Context)
    return (
        <View>
            <Button title = "add note" onPress={() => addNotes()} />
            <FlatList
                data={state}
                renderItem={({item}) => (
                    <View style = {styles.view}>
                        <Text style={styles.title}>ID:{item.id} {item.title} is the title, {item.description} is the desc </Text>
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
        fontSize:18
    },
    icon: {
        fontSize:24
    }
})

export default IndexScreen;