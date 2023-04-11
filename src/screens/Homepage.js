import * as React from 'react';
import { View,Text,StyleSheet } from "react-native"

const Homescreen = () => {
    return (
        <View style = {Homestyles.View}>
            <Text>
                Homescreen
            </Text>
        </View>
    )
}

const Homestyles = StyleSheet.create({
    View: {
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})

export default Homescreen;