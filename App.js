import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen.js";
import GameOverScreen from "./screens/GameOverScreen.js";

export default function App() {
  const [ userNumber, setUserNumber ] = useState();
  const [ guessRounds, setGuessRounds ] = useState(0);

  const beginNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null)
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds === 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={beginNewGame}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Go vote...then guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
