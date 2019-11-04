import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors.js"

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.selectedNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 22,
        color: Colors.secondaryTwo
    }
});

export default NumberContainer;