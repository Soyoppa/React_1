import React from 'react';
import { SafeAreaView, StyleSheet, Text,ToastAndroid,GestureResponderEvent, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './app/views/LoginScreen.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './app/views/MainScreen.tsx';

const Stack = createStackNavigator();


export default function App() {
  return (      
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: false,}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  text: {
    color: Colors.black,
    fontSize: 20
  },
})