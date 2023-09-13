import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { useSelector } from 'react-redux';


const Scores = () => {

  const getScores = useSelector((state)=>state.game)

  const navigation = useNavigation();

  const resetGame = () => {
    navigation.navigate('GamePlay', {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.youwins}>You Wins: {getScores.wins}</Text>
      <Text style={styles.Aiwins}>AI Wins: {getScores.looses}</Text>
      <View style={styles.Buttoncontainer}>
      <Button title="Play Again" onPress={resetGame} />
      </View>

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
  Buttoncontainer: {
    marginTop:20
  },
  youwins:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:'#00FF00',
    width:200,
    padding:10,
    borderRadius:5,
    margin:5

  },
  Aiwins:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:'#FF0000',
    width:200,
    padding:10,
    borderRadius:5,
    margin:5

  }
});

export default Scores;
