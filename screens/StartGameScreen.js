import React, { useState } from "react";
import { View, 
    StyleSheet, 
    Button, 
    Text, 
    TouchableWithoutFeedback, 
    Keyboard } from "react-native";

import Colors from "../constants/colors.js";

import Card from "../components/Card.js";

import Input from "../components/Input.js"

const StartGameScreen = props => {
    const [ enteredValue, setEnteredValue ] = useState("");
    
    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={inputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.resetButton}>
                            <Button 
                                color="white"
                                title="Reset"
                                onPress={()=> {}}
                            />
                        </View>
                        <View style={styles.confirmButton}>
                            <Button 
                                color="white"
                                title="Confirm"
                                onPress={()=> {}}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    resetButton: {
        backgroundColor: Colors.secondaryOne,
        width: 100
    },
    reset: {
        color: "white"
    },
    confirmButton: {
        backgroundColor: Colors.secondaryTwo,
        width: 100
    },
    confirm: {
        color: "white"
    }
});

export default StartGameScreen;