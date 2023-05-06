import React, {useContext, useEffect} from "react";
import { View,Text,Button, StyleSheet } from "react-native"
import { Context } from "../context/NotesContext";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

const IndexScreen = ({ navigation }) => {
    
    useEffect(()=> {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
                  <Feather style={styles.plusIcon} name="plus" />
                </TouchableOpacity>
              )
        })
    }, [navigation])

    const {state, deleteNote} = useContext(Context)
    
    return (
        <View>
            <FlatList
                data={state}
                renderItem={({item}) => (
                    <View style = {styles.view}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Note",{ id: item.id })}>
                            <Text style={styles.title}>ID:{item.id} {item.title} is the title, {item.description} is the desc </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> {deleteNote(item.id)}} >
                            <Feather style={styles.trashIcon} name="trash" />
                        </TouchableOpacity>
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
    trashIcon: {
        fontSize:24
    },
    plusIcon: {
        fontSize:24
    }

})

export default IndexScreen;