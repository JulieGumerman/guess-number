import React, { useState } from "react";
import { View, 
    StyleSheet, 
    Button, 
    Text, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert
     } from "react-native";

import Colors from "../constants/colors.js";

import Input from "../components/Input.js";
import Card from "../components/Card.js";
import NumberContainer from "../components/NumberContainer.js";


const StartGameScreen = props => {
    const [ enteredValue, setEnteredValue ] = useState("");
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState()
    
    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    }

    const resetInput = () => {
        setEnteredValue("");
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert("Uh-oh!", "Number has to be 1 and 99", [{text: "okay", style: "destructive", onPress: resetInput}]);
            setEnteredValue("");
            Keyboard.dismiss();
            return;
        } 
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();

    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.numberConfirm}>
                <Text>You selected</Text>
                <NumberContainer selectedNumber={selectedNumber}/>
                <Button 
                    title="START GAME"
                    onPress={() => props.onStartGame(selectedNumber)}
                />
            </Card>
            )
            
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
                                onPress={resetInput}
                            />
                        </View>
                        <View style={styles.confirmButton}>
                            <Button 
                                color="white"
                                title="Confirm"
                                onPress={confirmInput}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
    confirmButton: {
        backgroundColor: Colors.secondaryTwo,
        width: 100
    },
    numberConfirm: {
        marginTop: 20,
        alignItems: "center"
    }

});

export default StartGameScreen;