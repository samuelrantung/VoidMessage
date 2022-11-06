import React, {useEffect} from 'react';
import Home from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ChatRoom from './screens/ChatRoom';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import {store} from './redux';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    auth()
      .signInAnonymously()
      .then(res => console.log('signed in anonymously', res))
      .catch(err => console.log('error anonymously sign in', err));
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
