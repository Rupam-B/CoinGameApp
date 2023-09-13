import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  
  const handleLogin = () => {
    if (username === 'admin' || username === 'guest') {
      if (password === 'admin1234' || password === 'guest1234') {
        Toast.show({
          type: 'success',
          text1: 'Logged In Succesfully !',
          visibilityTime: 1500,
          topOffset: 100,
        });
        navigation.navigate('GamePlay');
      }
      
      else if(password===''){
        Toast.show({
          type: 'error',
          text1: 'Enter Password!',
          visibilityTime: 1500,
          topOffset: 200,
        });
          // alert('Enter Password!')
      }
      else{
        Toast.show({
          type: 'error',
          text1: 'Wrong Password!',
          visibilityTime: 1500,
          topOffset: 200,
        });
        // alert('Wrong Password')
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Enter valid credentials',
        visibilityTime: 1500,
        topOffset: 200,
      });
      // alert('Enter valid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerCoin}>₹</Text>
      <Text style={styles.header}>Welcome to Coin Game !</Text>
      <TextInput
      style={styles.TextInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
      style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button style={{backgroundColor:'black'}} title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    color:'white'
  },
  headerCoin: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
    backgroundColor:'#FFC300',
    height:60,
    width:60,
    borderRadius:50,
    paddingLeft:18
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10, 
  },
  TextInput:{
    backgroundColor:'white',
    color:'black',
    width:150,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    paddingHorizontal:5,
    paddingVertical:3

  }
});

export default LoginScreen;
