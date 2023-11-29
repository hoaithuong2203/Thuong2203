import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width
const CustomButton = (props) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.onPress?.()}
                style={[styles.button, {backgroundColor:props.backgroundColor}]}>
                <Text style={styles.buttonText}>{props.title}
                
                </Text>
            </TouchableOpacity>
        </View>
    )

}
export default CustomButton;
const styles = StyleSheet.create({
    container: {
        width:SCREEN_WIDTH*0.4,
        paddingBottom: 20
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: '#00FFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
      },
      background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'normal',
    },
   

})