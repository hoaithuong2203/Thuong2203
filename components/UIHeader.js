import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import { colors, fontSizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function UIHeader(props) {
    const {title} = props
    return (
        <View style={styles.header}>
            <Text style={styles.topic}
            >Đặt lời nhắc </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#DEF3FD",
      paddingVertical: 16,
    },
    header: { alignItems: "center", paddingTop: 60 },
    topic: { fontSize: 20, fontWeight: "bold" },
})
export default UIHeader;
