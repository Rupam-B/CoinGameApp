import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scores = () => {

  const resetGame = () => {
    navigation.navigate('GamePlay', {});
  };

  return (
    <View style={styles.container}>
      <Text>Scores</Text>
      <Button title="Play Again" onPress={resetGame} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  }
});

export default Scores;
