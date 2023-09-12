import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';


const Scores = () => {

  const navigation = useNavigation();

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
