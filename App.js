import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js"

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Go vote...then guess a number"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
