import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import Game from './screens/Game';
import Result from './screens/Result';
import Scores from './screens/Scores';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="GamePlay" component={Game} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Scores" component={Scores} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
