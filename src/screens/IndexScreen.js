import React, {useContext} from "react";
import { View,Text,Button, TextInput } from "react-native"
import NotesContext from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
const IndexScreen = () => {
    const value = useContext(Context)
    return (
        <View>
            <Button title = "add note" onPress={() => value.addNotes()} />
            <FlatList
                data={value.Notes}
                renderItem={({item}) => <Text>{item.title} is the title, {item.description} is content</Text>}
                keyExtractor={(item) => item.title}
            />
            <Feather name="trash" style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
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