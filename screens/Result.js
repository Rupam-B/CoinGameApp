import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Result = (isPlayerTurn) => {
  const navigation = useNavigation();
  const resetGame = () => {
    navigation.navigate('GamePlay', {});
  };
  const navigateToScores = () => {
    navigation.navigate('Scores', {});
  };
  return (
    <View style={styles.container}>
      {isPlayerTurn ? (
        <Text style={styles.resultText}>You Lose! AI Wins!</Text>
      ) : (
        <Text style={styles.resultText}>You Win! AI Loses!</Text>
      )}
      <Button title="Play Again" onPress={resetGame} />
      <Button title="Scores" onPress={navigateToScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Result;
