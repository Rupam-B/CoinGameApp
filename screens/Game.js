import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// --------
import { connect } from 'react-redux';
import { winGame, looseGame } from '../store/action';
// --------

const Game = ({ wins, looses, winGame, looseGame }) => {
  const [coins, setCoins] = useState(20);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    if (!isPlayerTurn && coins > 0) {
      const timer = setTimeout(() => {
        let aiMove;
        if (coins === 1) {
          aiMove = 1;
        } else if (coins <= 5) {
          aiMove = coins === 5 ? 4 : (coins - 1) % 4 || 1;         
        } else {
          aiMove = Math.min(coins % 5 || 1, Math.floor(Math.random() * 4) + 1);
        }

        setCoins(coins - aiMove);
        setIsPlayerTurn(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, coins]);

  const handlePlayerMove = (count) => {
    if (count < 1 || count > 4 || count > coins) {
      alert('Invalid move. Pick 1 to 4 coins.');
      return;
    }

    setCoins(coins - count);
    setIsPlayerTurn(false);
  };

  const navigateToResultScreen = () => {
    navigation.navigate('Result', { isPlayerTurn:!isPlayerTurn });
    setCoins(20);
    setIsPlayerTurn(true); 




    // ---------
    if (!isPlayerTurn) {
      winGame();
    } else if (isPlayerTurn) {
      looseGame();
    }

    // --------------
  };

  return (
    <>
    <View style={styles.score}>
      <View style={styles.scoreElements}>
        <Text style={styles.scoreTextOne} >Wins</Text>
        <Text style={styles.scoreTextOne} >{wins}</Text>
      </View>
      <View style={styles.scoreElements}>
        <Text style={styles.scoreTextTwo}>Losses</Text>
        <Text style={styles.scoreTextTwo}>{looses}</Text>
        </View>
      </View>
    <View style={styles.container}>
      <Text style={styles.header}>Turn-Based Coin Game</Text>
      <Text style={styles.coinsTextPrimary}>Coins Remaining: {coins}</Text>
      <View style={styles.Coincontainer}>
      {Array.from({ length: coins }).map((_, index) => (
    <Text key={index} style={styles.coinsText}>₹</Text>
  ))}</View>
      {coins === 0 ? (
        <View style={styles.resultContainer}>
        <Button title="See Result" onPress={navigateToResultScreen} />
        </View>
      ) : (
        <View style={styles.turnContainer}>
          {isPlayerTurn ? (
            <View style={styles.turnContainer}>
              <Text style={styles.turnText}>Your Turn</Text>
              <View style={styles.buttonContainer}>

                <View style={styles.buttonContainerButton} >
                <Button style={styles.gameButton}
                  title="Pick 1 Coin"
                  onPress={() => handlePlayerMove(1)}
                />
                </View>

                <View style={styles.buttonContainerButton} >
                <Button
                  title="Pick 2 Coins"
                  onPress={() => handlePlayerMove(2)}
                />
                </View>
                <View style={styles.buttonContainerButton} >
                <Button
                  title="Pick 3 Coins"
                  onPress={() => handlePlayerMove(3)}
                />
                </View>

                <View style={styles.buttonContainerButton} >
                <Button
                  title="Pick 4 Coins"
                  onPress={() => handlePlayerMove(4)}
                />
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.turnText}>AI is Thinking...</Text>
          )}
        </View>
      )}
      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  Coincontainer: {
    height:30,
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'black',
    flexWrap:'wrap',
    paddingHorizontal:30
  },
  turnContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10
  },
  resultContainer:{
    marginBottom:300
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  coinsText: {
    justifyContent:'center',
    alignItems:'center',
    fontSize: 28,
    marginBottom: 10,
    marginTop:10,
    color:'white',
    marginHorizontal:20,
    height:30,
    width:30,
    backgroundColor:'#FF0000',
    borderRadius:50,
    paddingLeft:8,
    paddingBottom:4,
    paddingTop:0
  },
  coinsTextPrimary: {
    fontSize: 15,
    // marginBottom: 20,
    color:'white',
  },
  turnText: {
    fontSize: 20,
    top:-40,
    color:'white',
    marginTop:10

  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap:'wrap',
    padding:20,
    marginBottom:30

  },
  buttonContainerButton:{
    marginHorizontal:15,
    marginBottom:20

  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score:{
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20
  },
  scoreTextOne:{
    fontSize: 24,
    color:'#00FF00'
  },
  scoreTextTwo:{
    fontSize: 24,
    color:'#FF0000'
  },
  scoreElements:{
    alignItems:'center',
  }

  
});

// ------------
const mapStateToProps = (state) => ({
  wins: state.game.wins,
  looses: state.game.looses,
});

const mapDispatchToProps = {
  winGame,
  looseGame,
};
// -------------


export default connect(mapStateToProps, mapDispatchToProps)(Game);

